import { Express, Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("User Route");
});

export const userRouter = router;
