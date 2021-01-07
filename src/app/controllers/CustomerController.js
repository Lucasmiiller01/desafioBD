
import createCustomerSchema from "../validations/createCustomerSchema";

class CustomerController {
  async create(request, response)  {
    const { cep, email, cpf } = request.body;
    await createCustomerSchema.validate(request.body);


    // const user = await createUser.execute({ email, password, name });


    return response.send("teste");
  }
}

export default new CustomerController();
