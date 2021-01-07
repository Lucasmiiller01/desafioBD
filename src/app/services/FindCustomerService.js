import CustomerRepository from "../repositories/CustomerRepository";
import AppError from "../shared/errors/AppError";

class FindCustomerService {
  constructor(){
    this.customerRepository = new CustomerRepository();
  }

  async execute(email){
    const customer = await this.customerRepository.findByEmail(email);

    if(!customer) {
      throw new AppError("Customer not found !");
    }

    return customer;

  }
}

export default FindCustomerService;
