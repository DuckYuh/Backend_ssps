import express from 'express';
import {studentLogin,adminLogin,updateBalance,updateQuotas, getBalance, getHistory, getReport, Payment,getUserByID} from '../controllers/userController.js';
import authStudent from '../middleware/userAuth.js';

const userRouter = express.Router();

userRouter.post('/studentlogin',studentLogin)
userRouter.post('/adminlogin',adminLogin)
userRouter.post('/updatebalance',updateBalance)
userRouter.post('/updatequotas',updateQuotas)
userRouter.post('/getBalance',getBalance)
userRouter.post('/getuser',getUserByID)
userRouter.post("/make-payment", async (req, res) => {
    const {Stu_ID, amount, method } = req.body;
  
    if (!Stu_ID) {
      return res.status(400).json({ status: "error", message: "User ID is required!" });
    }
  
    const payment = new Payment();
  
    try {
      const result = await payment.processPayment(Stu_ID, amount, method);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: "error", message: "Internal server error." });
    }
  });
export default userRouter;