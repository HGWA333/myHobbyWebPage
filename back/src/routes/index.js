import { Router } from "express";

import userApi from "./users.js";

const router = Router();

router.use("/users", userApi);

export default router;
