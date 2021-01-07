class AddressRepository {
  address = [];

  async create(address) {
    return this.address.push(address);
  }
}

export default AddressRepository;
