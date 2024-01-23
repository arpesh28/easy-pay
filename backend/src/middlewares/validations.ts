import { NextFunction, Request, Response } from "express";
import {
  loginBodySchema,
  signUpBodySchema,
  updateUserBodySchema,
} from "../config/zodSchemas";

const getErrors = (errors: any) => {
  return errors?.map((err: { path: number[]; message: string }) => ({
    [err.path[0]]: err.message,
  }));
};

const validateSignUpBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validate = signUpBodySchema.safeParse(req.body);
  if (!validate.success) {
    const errors = getErrors(validate.error.errors);
    return res.status(400).json({ message: "Invalid inputs!", errors });
  }
  if (validate.success) next();
};

const validateLoginBody = (req: Request, res: Response, next: NextFunction) => {
  const validate = loginBodySchema.safeParse(req.body);
  if (!validate.success) {
    const errors = getErrors(validate.error.errors);
    return res.status(400).json({ message: "Invalid inputs!", errors });
  }
  if (validate.success) next();
};

const validateUpdateUserBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body.user;
  const validate = updateUserBodySchema.parse(req.body);
  req.body.data = validate;
  req.body.user = user;
  next();
  // if (!validate) {
  //   const errors = getErrors(validate?.error?.errors);
  //   return res.status(400).json({ message: "Invalid inputs!", errors });
  // }
  // if (validate.success) next();
};

export { validateSignUpBody, validateLoginBody, validateUpdateUserBody };
