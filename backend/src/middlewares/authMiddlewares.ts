import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../config/db";

const userMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer "))
    return res.status(403).json({
      message: "Unauthorized",
    });

  const [_, token] = authorization?.split("Bearer ");
  if (!token)
    return res.status(403).json({
      message: "Unauthorized",
    });

  try {
    const validate = jwt.verify(token, process.env.JWT_SECRET!);

    if (!validate || typeof validate === "string" || !validate.email)
      return res.status(401).json({ message: "Unauthorized" });

    const user = await User.findOne({ email: validate.email });
    req.body.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Unauthorized" });
  }
};

export { userMiddleware };
