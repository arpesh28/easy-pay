import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { SALT_ROUNDS } from "../config";

export const bcryptPassword = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      console.log("hash:", hash);
      return hash;
    });
  });
};

// export const comparePasswords = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   bcrypt.compare(req.body.password, bcryptPassword, function (err, result) {
//     // result == true
//   });
// };
