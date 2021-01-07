
class CustomerRepository {
  constructor(){
    this.customers = [];
  }
  async create(customer) {
    this.customers.push(customer)
    return customer;
  }

  async findByEmail(email) {
    return this.customers.find(customer => customer.email == email);
  }

  async findByEmailAndCpf(email, cpf) {
    return this.customers.find(customer => customer.email == email || customer.cpf == cpf);
  }
}

export default CustomerRepository;
