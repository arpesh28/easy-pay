import { Request, Response, Router } from "express";
import { Account, User } from "../config/db";
import { userMiddleware } from "../middlewares/authMiddlewares";
import mongoose from "mongoose";
import { error } from "console";

const router = Router();

router.get("/balance", userMiddleware, async (req: Request, res: Response) => {
  const balance = await Account.findOne({ user: req.body.user._id });

  res.json({
    data: (balance?.balance ?? 0) / 100,
  });
});

router.post(
  "/transfer",
  userMiddleware,
  async (req: Request, res: Response) => {
    const { amount, user, to } = req.body;
    const newAmount = Math.round(amount * 100);

    const session = await mongoose.startSession();
    session.startTransaction();

    const toAccount = await User.findById(to);
    const balance = await Account.findOne({ user: user._id });

    if (!toAccount || !balance) {
      await session.abortTransaction();
      session.endSession();
      return res.status(411).json({ message: "Invalid Account" });
    }
    if (!balance?.balance || balance?.balance < amount) {
      await session.abortTransaction();
      session.endSession();
      return res.status(411).json({ message: "Insufficient balance" });
    }

    try {
      await Account.findOneAndUpdate(
        { user: user._id },
        { $inc: { balance: -newAmount } }
      );
      await Account.findOneAndUpdate(
        { user: to },
        {
          $inc: {
            balance: newAmount,
          },
        }
      );

      await session.commitTransaction();
      session.endSession();
      res.json({
        message: "Transfer successful",
      });
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      console.error("err:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

export const accountRouter = router;
