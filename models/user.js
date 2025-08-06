'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    profession: DataTypes.STRING,
    skills: DataTypes.TEXT,
    bio: DataTypes.TEXT,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};