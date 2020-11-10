'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Barang.hasMany(models.Favorite)
    }
  };
  Barang.init({
    Nama_Barang: DataTypes.STRING,
    Qty: DataTypes.INTEGER,
    Exp_date: DataTypes.DATE,
    Harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barang',
  });
  return Barang;
};
