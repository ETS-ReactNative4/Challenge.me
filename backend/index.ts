import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import httpStatusCodes from "http-status-codes";
import { ResponseBody } from "./interfaces";
import "dotenv";

if (process.env.NODE_ENV === "production") console.log = () => {};

const app: Application = express();
const port = process.env.PORT;
const corsOptions = { origin: true, credentials: true };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res
    .status(httpStatusCodes.OK)
    .send({ message: "Server operating normally." } as ResponseBody);
});

try {
  app.listen(port, (): void => {
    console.log(`Listening at port ${port}`);
  });
} catch (error: any) {
  console.log(`Error occurred: ${error.message}`);
}
