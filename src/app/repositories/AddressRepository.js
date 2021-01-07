import AddressModel from '../models/Address';

class AddressRepository {
  constructor() {
    this.model = AddressModel;
  }

  async create(address) {
    return this.model.create(address);
  }
}

export default AddressRepository;
