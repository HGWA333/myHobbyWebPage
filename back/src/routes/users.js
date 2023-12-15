import { Router } from "express";

const router = Router();

router.post("/ag", (req, res) => {
  console.log(req.body, "test");
  console.log(req.body.userName, "test");
  const testName = req.body.userName;
  const testNum = req.body.userNum;
  const obj = {
    testName,
    testNum,
  };
  res.send(obj, "ag");
});

export default router;
