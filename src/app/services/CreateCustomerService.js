import AppError from "../shared/errors/AppError";

class CreateCustomerService {
  constructor(customerRepository){
    this.customerRepository = customerRepository;
  }

  async execute({ email, cpf, address_id }){
    const checkCustomerExists = await this.customerRepository.findByEmailAndCpf(email, cpf);

    if(checkCustomerExists) {
      throw new AppError("Email address or cpf already used.");
    }

    const customer = await this.customerRepository.create({ email, cpf, address_id });

    return customer;

  }
}

export default CreateCustomerService;
