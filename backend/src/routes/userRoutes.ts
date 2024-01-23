import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import { Account, User } from "../config/db";
import { userMiddleware } from "../middlewares/authMiddlewares";
import { bcryptPassword, comparePasswords } from "../middlewares/mutateBody";
import {
  validateGetUsersQuery,
  validateLoginBody,
  validateSignUpBody,
  validateUpdateUserBody,
} from "../middlewares/validations";

const router = Router();

router.get(
  "/all-users",
  userMiddleware,
  validateGetUsersQuery,
  async (req, res) => {
    const params = req.query || "";

    const filter = [];
    for (const [key, value] of Object.entries(params)) {
      filter.push({ [key]: value });
    }
    const query = filter.length > 0 ? { $or: filter } : {};
    const users = await User.find(query);
    res.json({ data: users });
  }
);

router.post(
  "/signup",
  validateSignUpBody,
  bcryptPassword,
  async (req: Request, res: Response) => {
    const { email, firstName, lastName, hashPassword } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(411).json({ message: "Email already exists" });

    const newUser = await User.create({
      email,
      password: hashPassword,
      firstName,
      lastName,
    });

    const newAccount = await Account.create({
      user: newUser._id,
      balance: Math.round(1 + Math.random() * 10000),
    });

    const token = jwt.sign(
      { email, firstName, lastName },
      process.env.JWT_SECRET!
    );

    res.json({ data: newUser, token, account: newAccount });
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
