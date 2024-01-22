import express, { Express, Request, Response } from "express";
import cors from "cors";
import router from "./routes";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log("Running port ", PORT);
});
