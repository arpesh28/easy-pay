import { Request, Response, Router } from "express";
import { User } from "../config/db";
import { validateSignUpBody } from "../middlewares/validations";
import jwt from "jsonwebtoken";
import { bcryptPassword } from "../middlewares/mutateBody";

const router = Router();

router.post(
  "/signup",
  validateSignUpBody,
  bcryptPassword,
  async (req: Request, res: Response) => {
    const { email, password, firstName, lastName, hashPassword } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(411).json({ message: "Email already exists" });

    const newUser = await User.create({
      email,
      password: hashPassword,
      firstName,
      lastName,
    });
    const token = jwt.sign(
      { email, firstName, lastName },
      process.env.JWT_SECRET!
    );

    res.json({ data: newUser, token });
  }
);

export const userRouter = router;
