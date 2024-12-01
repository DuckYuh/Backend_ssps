import mongoose from "mongoose";

const printerSchema =new mongoose.Schema({
    PrinterID: {type: String, require: true},
    printerName: {type: String, require: true},
    brand: {type: String, require: true},
    model: {type: String, require: true},
    description: {type: String},
    location: {type: Object, require: true},
    performance: {type: Boolean, require: true, default: true},
    resources: {type: Object, require: true, default: {paper: "availabe", ink: "available"}},
    available: {type: Boolean, require: true, default: true},
})


const printerModel = mongoose.models.printer || mongoose.model('printer',printerSchema)

export default printerModel;