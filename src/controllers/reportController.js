import reportModel from "../models/reportModel.js";

const sendReport = async (req, res) => {
    try {
        const {
            Stu_ID,
            description,
            location
        } = req.body;

        const reportData = {
            Stu_ID,
            description,
            location,
            status: false
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

const updateReportStatus = async (req, res) => {
    try {
        const { id, status } = req.body;
        if (!id || status === undefined) {
            return res.status(400).json({ 
                success: false, 
                message: "Report ID and status are required" 
            });
        }
        const updatedReport = await reportModel.findByIdAndUpdate(
            id,
            { status }, // Trường cần cập nhật
            { new: true } // Trả lại tài liệu đã cập nhật
        );
        if (!updatedReport) {
            return res.status(404).json({ 
                success: false, 
                message: "Report not found" 
            });
        }

        res.json({
            success: true,
            message: "Report status updated successfully",
            report: updatedReport,
        });
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

export {sendReport,getReport,updateReportStatus};