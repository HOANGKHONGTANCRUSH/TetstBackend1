'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cinic extends Model {
  
    static associate(models) {
      // define association here
    }
  };
  Cinic.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cinic',
  });
  return Cinic;
};