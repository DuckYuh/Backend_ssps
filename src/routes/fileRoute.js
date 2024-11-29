import express from 'express';
import { uploadFile,getFileByID } from '../controllers/fileController.js'
import authStudent from '../middleware/userAuth.js';
import upload from '../middleware/multer.js';

const fileRouter = express.Router();

fileRouter.post('/uploadfile',upload.single("file"),uploadFile)
fileRouter.post('/getbyid',getFileByID)


export default fileRouter;