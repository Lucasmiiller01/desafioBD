import CustomerModel from '../models/Customer';

class CustomerRepository {
  constructor() {
    this.model = CustomerModel;
  }

  async create(customer) {
    return this.model.create(customer);
  }
}

export default CustomerRepository;
