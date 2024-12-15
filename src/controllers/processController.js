import processModel from "../models/processModel.js";
import userModel from "../models/userModel.js";
import printerModel from "../models/printerModel.js";

const addProcess = async (req, res) => {
    try {
        const {
            Stu_ID,
            PrinterID,
            filename,
            printProperties,
        } = req.body;

        const processData = {
            Stu_ID,
            PrinterID,
            filename,
            printProperties,
            starttime: Date.now(),
            endtime: Date.now(),
        }

        const process = new processModel(processData)
        await process.save();
        res.json({success:true,message:"Added Printer"});
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const getAllProcess = async (req, res) => {
    try {
        const process = await processModel.find({});
        res.json({ success: true, process });
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const getStudentProcess = async (req, res) => {
    try {
        const { Stu_ID } = req.body;
        
        const studentProcess = await processModel.find({ Stu_ID: Stu_ID });
        res.json({ success: true, studentProcess });
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const getPrinterProcess = async (req, res) => {
    try {
        const { Printer_ID } = req.body;
        const printerProcess = await processModel.find({ Printer_ID: Printer_ID });
        res.json({ success: true, printerProcess });
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

export {addProcess,getAllProcess,getStudentProcess,getPrinterProcess};