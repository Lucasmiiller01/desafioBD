class CreateAddressService {
  constructor(addressRepository){
    this.addressRepository = addressRepository;
  }

  async execute({ cep, street }){
    const address = await this.addressRepository.create({ cep, street });
    return address;

  }
}

export default CreateAddressService;
