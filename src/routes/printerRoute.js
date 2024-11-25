import express from 'express';
import {addPrinter,getAvaiblePrinter,getAllPrinter,updatePrinter,deletePrinter} from '../controllers/printerController.js';

const printerRouter = express.Router();

printerRouter.post('/add',addPrinter)
printerRouter.post('/getavailable',getAvaiblePrinter)
printerRouter.post('/get',getAllPrinter)
printerRouter.post('/update',updatePrinter)
printerRouter.post('/delete',deletePrinter)

export default printerRouter;