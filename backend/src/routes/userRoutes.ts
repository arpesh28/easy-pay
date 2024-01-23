import { Request, Response, Router } from "express";
import { User } from "../config/db";
import {
  validateLoginBody,
  validateSignUpBody,
  validateUpdateUserBody,
} from "../middlewares/validations";
import jwt from "jsonwebtoken";
import { bcryptPassword, comparePasswords } from "../middlewares/mutateBody";
import { userMiddleware } from "../middlewares/authMiddlewares";

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

router.post(
  "/login",
  validateLoginBody,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User doesn't exist" });

    const auth: boolean = await comparePasswords(password, user.password);
    console.log("auth:", auth);
    if (!auth) return res.status(401).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      { email, firstName: user.firstName, lastName: user.lastName },
      process.env.JWT_SECRET!
    );

    res.json({ data: user, token });
  }
);

router.put(
  "/",
  validateUpdateUserBody,
  userMiddleware,
  async (req: Request, res: Response) => {
    const updateUser = await User.findOneAndUpdate(
      { _id: req.body.user._id },
      {
        ...req.body.data,
      }
    );
    res.json({
      data: updateUser,
    });
  }
);

export const userRouter = router;
