import { Request, Response, Router } from "express";
import { User } from "../config/db";
import { validateSignUpBody } from "../middlewares/validations";

const router = Router();

router.post("/signup", validateSignUpBody, (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;

  const newUser = User.create({});
});

export const userRouter = router;
