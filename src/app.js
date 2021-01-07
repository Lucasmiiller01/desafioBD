import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.json';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }


  middlewares() {
    this.server.use(express.json());
  }


  routes() {
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.server.use(routes);
  }

}

export default new App().server;
