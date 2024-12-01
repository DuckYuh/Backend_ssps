import mongoose from "mongoose";

const reportSchema =new mongoose.Schema({
    Stu_ID: {type: String, require: true},
    description: {type:String, require: true},
})


const reportModel = mongoose.models.report || mongoose.model('report',reportSchema)

export default reportModel;