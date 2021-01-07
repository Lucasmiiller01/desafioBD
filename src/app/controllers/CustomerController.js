
import createCustomerSchema from "../validations/createCustomerSchema";

import CreateCustomerService from "../services/CreateCustomerService";
import CreateAddressService from "../services/CreateAddressService";
import SearchAddressByZipCodeService from "../services/SearchAddressByZipCodeService";

class CustomerController {
  async create(request, response)  {
    const { cep, email, cpf } = request.body;
    await createCustomerSchema.validate(request.body);
    const createCustomerService = new CreateCustomerService();
    const createAddressService = new CreateAddressService();
    const searchAddressByZipCodeService = new SearchAddressByZipCodeService();

    const { logradouro } = await searchAddressByZipCodeService.execute(cep);

    const { id } = await createAddressService.execute({ street: logradouro, cep  });

    const customer = await createCustomerService.execute({ email, cpf, address_id: id });

    return response.status(201).json(customer);
  }
}

export default new CustomerController();
