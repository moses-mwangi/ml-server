import express, { Router } from "express";
import getTest from "../controlers/Test";

const router: Router = express.Router();

router.route("/").get(getTest);

export default router;
