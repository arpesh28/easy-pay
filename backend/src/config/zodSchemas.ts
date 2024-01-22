import z from "zod";

export const signUpBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
  firstName: z.string().max(50),
  lastName: z.string().max(50),
});
