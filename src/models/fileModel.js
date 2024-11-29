import mongoose from "mongoose";

const fileSchema =new mongoose.Schema({
    Stu_ID: {type: String, require: true},
    filename: {type: String, require: true},
    filepath: {type: String, require: true},
    time: {type: Number, require: true}
})


const fileModel = mongoose.models.upfile || mongoose.model('upfile',fileSchema)

export default fileModel;