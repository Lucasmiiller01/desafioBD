import CustomerModel from '../models/Customer';
const { Op } = require("sequelize");

class CustomerRepository {
  constructor() {
    this.model = CustomerModel;
  }

  async create(customer) {
    return this.model.create(customer);
  }

  async findByEmail(email) {
    return this.model.findOne({ where: { email } });
  }

  async findByEmailAndCpf(email, cpf) {
    return this.model.findOne({
      where: {
        [Op.or]: [{ email },{ cpf }]
      }
    });
  }
}

export default CustomerRepository;
