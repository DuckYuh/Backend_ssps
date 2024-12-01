import express from 'express';
import {addPrinter,getAvaiblePrinter,getAllPrinter,updatePrinter,deletePrinter, sendMaintenance,getPrinterByID} from '../controllers/printerController.js';
import authStudent from '../middleware/userAuth.js';

const printerRouter = express.Router();

printerRouter.post('/add',addPrinter)
printerRouter.post('/getavailable',getAvaiblePrinter)
printerRouter.post('/get',getAllPrinter)
printerRouter.post('/update',updatePrinter)
printerRouter.post('/delete',deletePrinter)
printerRouter.post('/sendMaintenance',sendMaintenance)
printerRouter.post('/getprinter',getPrinterByID)

export default printerRouter;