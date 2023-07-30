'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class history extends Model {
  
    static associate(models) {
      // define association here
    }
  };
  history.init({
    patientID: DataTypes.INTEGER,
    doctorID: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    files: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'history',
  });
  return history;
};