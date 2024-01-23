import { Request, Response, Router } from "express";
import { Account } from "../config/db";
import { userMiddleware } from "../middlewares/authMiddlewares";

const router = Router();

router.get("/balance", userMiddleware, async (req, res) => {
  const balance = await Account.findOne({ user: req.body.user._id });

  res.json({
    data: balance?.balance,
  });
});

export const accountRouter = router;
