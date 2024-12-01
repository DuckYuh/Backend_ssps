import reportModel from "../models/reportModel.js";

const sendReport = async (req, res) => {
    try {
        const {
            Stu_ID,
            description
        } = req.body;

        const reportData = {
            Stu_ID,
            description
        }

        const report = new reportModel(reportData)
        await report.save();
        res.json({success:true,message:"Report sended"});
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const getReport = async (req, res) => {
    try {
        const report = await reportModel.find({});
        res.json({ success: true, report });
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

export {sendReport,getReport};