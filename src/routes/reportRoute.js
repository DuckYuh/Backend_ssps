import express from 'express';
import { getReport,sendReport } from "../controllers/reportController.js";

const reportRouter = express.Router();

reportRouter.post('/get',getReport)
reportRouter.post('/send',sendReport)

export default reportRouter;