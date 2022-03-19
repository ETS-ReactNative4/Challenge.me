import express from "express";
import * as userHandler from "../handlers/user.handler";
const router = express.Router();

router.get("/login", (req, res) => {
  userHandler.login(req, res);
});

export default router;
