import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.json';
import './database';
import AppError from "./app/shared/errors/AppError";


class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }


  middlewares() {
    this.server.use(express.json());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if(err instanceof AppError) {
        return res.status(err.statusCode).json({
          status:  "error",
          message: err.message
        })
      }
      return res.status(500).json({
        status: "error",
        message: "Erro não insperado !"
      })
    });
  }
  routes() {
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.server.use(routes);
  }

}

export default new App().server;
