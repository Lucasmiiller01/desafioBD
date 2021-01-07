import Sequelize, { Model } from 'sequelize';
class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.STRING,
        email: Sequelize.STRING
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Address, { foreignKey: 'address_id', as: 'address' });
  }


}

export default Customer;
