import FakeCustomerRepository from "../repositories/fakes/FakeCustomerRepository";
import FindCustomerService from "./FindCustomerService";
import CreateCustomerService from "./CreateCustomerService";

import AppError from "../shared/errors/AppError";

describe("FindCustomer",  () => {
  it("should be able to search for customer by email", async () => {
    const fakeCustomerRepository = new FakeCustomerRepository();
    const createCustomer = new CreateCustomerService(fakeCustomerRepository);
    const findCustomer = new FindCustomerService(fakeCustomerRepository);
    const email = "jhondoe@exemple.com";

    await createCustomer.execute({
      cpf: "99999999",
      email,
      address_id: "134"
    });

    const customer = await findCustomer.execute(email);

    expect(customer).toHaveProperty("email");
  });

  it("should not be able to find a customer that does not exist", async () => {
    const fakeCustomerRepository = new FakeCustomerRepository();

    const findCustomerService = new FindCustomerService(fakeCustomerRepository);

    expect(findCustomerService.execute({
      email: "jhondoe@exemple.com",
    })).rejects.toBeInstanceOf(AppError);

  });
});
