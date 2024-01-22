import { NextFunction, Request, Response } from "express";
import { signUpBodySchema } from "../config/zodSchemas";

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
    //   @ts-ignore
    const errors = getErrors(validate.error.errors);
    return res.status(400).json({ message: "Invalid inputs!", errors });
  }
  if (validate.success) next();
};

export { validateSignUpBody };
