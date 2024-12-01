import express from 'express';
import { getReport,sendReport,updateReportStatus } from "../controllers/reportController.js";

const reportRouter = express.Router();

reportRouter.post('/get',getReport)
reportRouter.post('/send',sendReport)
reportRouter.post('/update',updateReportStatus)

export default reportRouter;