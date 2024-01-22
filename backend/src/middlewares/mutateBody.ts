import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { SALT_ROUNDS } from "../config";

export const bcryptPassword = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const hash = bcrypt.hashSync(req.body.password, salt);
  req.body.hashPassword = hash;
  next();
};

export const comparePasswords = async (
  requestPassword: string,
  userPassword: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    bcrypt.compare(requestPassword, userPassword).then((compare) => {
      resolve(compare);
    });
  });
};
