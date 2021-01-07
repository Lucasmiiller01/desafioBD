import CustomerRepository from "../repositories/CustomerRepository";

class CreateCustomerService {
  constructor(){
    this.customerRepository = new CustomerRepository();
  }

  async execute({ email, cpf, address_id }){
    const customer = await this.customerRepository.create({ email, cpf, address_id });
    return customer;

  }
}

export default CreateCustomerService;
