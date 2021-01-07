import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Customer from '../app/models/Customer';
import Address from '../app/models/Address';

const models = [Customer, Address];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(m => m.associate && m.associate(this.connection.models));
  }

}

export default new Database();
