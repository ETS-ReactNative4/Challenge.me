import express, { Request } from "express";
import * as userHandler from "../handlers/user.handler";
import { UserLoginReqParams, UserRegisterBody } from "../model/user";

const router = express.Router();

router.post("/", (req: Request<{}, {}, UserRegisterBody>, res) => {
  userHandler.register(req, res);
});

router.get("/login", (req: Request<any, any, any, UserLoginReqParams>, res) => {
  userHandler.login(req, res);
});

export default router;
