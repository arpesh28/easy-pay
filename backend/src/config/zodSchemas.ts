import z from "zod";

export const signUpBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
  firstName: z.string().max(50),
  lastName: z.string().max(50),
});

export const loginBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

export const selectedUpdateUserSchema = z.object({
  email: z.string().email().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

export const updateUserBodySchema = selectedUpdateUserSchema.pick({
  email: true,
  firstName: true,
  lastName: true,
});

export const usersQuerySchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});
