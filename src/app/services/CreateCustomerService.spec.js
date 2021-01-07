import FakeCustomerRepository from "../repositories/fakes/FakeCustomerRepository";
import CreateCustomerService from "./CreateCustomerService";

import AppError from "../shared/errors/AppError";

describe("CreateCustomer",  () => {
  it("should be able to create a new customer", async () => {
    const fakeCustomerRepository = new FakeCustomerRepository();

    const createCustomer = new CreateCustomerService(fakeCustomerRepository);

    const customer = await createCustomer.execute({
      cpf: "99999999",
      email: "jhondoe@exemple.com",
      address_id: "134"
    });

    expect(customer).toHaveProperty("email");
  });

  it("should not be able to create a new customer with same email or cpf from another", async () => {
    const fakeCustomerRepository = new FakeCustomerRepository();

    const createCustomer = new CreateCustomerService(fakeCustomerRepository);

    await createCustomer.execute({
      cpf: "99999999",
      email: "jhondoe@exemple.com",
      address_id: "134"
    });

    expect(createCustomer.execute({
      cpf: "99999999",
      email: "jhondoe@exemple.com",
      address_id: "134"
    })).rejects.toBeInstanceOf(AppError);

  });
});
