import { Router } from 'express';
import CustomerController from "../app/controllers/CustomerController";

const customersRouter = Router();


customersRouter.post('/', CustomerController.create);


export default customersRouter;


