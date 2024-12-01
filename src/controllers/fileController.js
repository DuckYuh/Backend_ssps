import fileModel from "../models/fileModel.js";
import path from "path";
import fs from "fs"; // Import fs để đọc file
import { PDFDocument } from 'pdf-lib'; // Import PDFDocument từ pdf-lib


const BASE_DIR = path.resolve("Backend_ssps");

const uploadFile = async (req, res) => {
    try {
        const { Stu_ID } = req.body;
        const filepath = path.relative(BASE_DIR, req.file.path);

        // Đọc số trang của file PDF
        const absoluteFilePath = path.resolve(BASE_DIR, req.file.path);

        // Read the PDF file and load it into pdf-lib
        const pdfBytes = fs.readFileSync(absoluteFilePath);
        const pdfDoc = await PDFDocument.load(pdfBytes);
        const numberOfPages = pdfDoc.getPageCount();

        const uploadData = {
            Stu_ID,
            filename: req.file.originalname,
            filepath,
            numberOfPages, // Thêm số trang vào dữ liệu upload
            time: Date.now(),
        }
        const files = new fileModel(uploadData);
        await files.save();
        res.json({ success: true, message: "Uploaded", numberOfPages, filename: req.file.originalname, filepath: filepath });
    } catch (error) {
        res.json({ success: false, message: error.message });
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