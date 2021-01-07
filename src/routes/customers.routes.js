import { Router } from 'express';
import CustomerController from "../app/controllers/CustomerController";

const customersRouter = Router();


customersRouter.post('/', CustomerController.create);
customersRouter.get('/:email', CustomerController.index);


export default customersRouter;


