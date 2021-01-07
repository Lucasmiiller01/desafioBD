import AddressRepository from "../repositories/AddressRepository";

class CreateAddressService {
  constructor(){
    this.addressRepository = new AddressRepository();
  }

  async execute({ cep, street }){
    const address = await this.addressRepository.create({ cep, street });

    return address;

  }
}

export default CreateAddressService;
