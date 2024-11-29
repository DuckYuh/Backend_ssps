import fileModel from "../models/fileModel.js";
import path from "path";

const BASE_DIR = path.resolve("Backend_ssps");

const uploadFile = async (req, res) => {
    try {
        const {
            Stu_ID,
        } = req.body;
       
        const filepath = path.relative(BASE_DIR, req.file.path);

        const uploadData = {
            Stu_ID,
            filename: req.file.originalname,
            filepath,
            time:Date.now(),
        }
        const files = new fileModel(uploadData)
        await files.save();
        res.json({success:true,message:"Uploaded"});
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const getFileByID = async (req, res) => {
    try {
        const {
            Stu_ID,
        } = req.body;

        const files = await fileModel.find({Stu_ID});

        res.json({success:true,files});
    } catch (error) {
        res.json({success: false,message: error.message});
    }
} 

export {uploadFile,getFileByID}