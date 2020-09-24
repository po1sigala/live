const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    //Add hooks here, in the init() method
    hooks: {
      //Use the beforeCreate hook to work with data before a new instance is created
      beforeCreate(newUserData) {
        //In this case, we are taking the user's email address, and making all letters lower case before adding it to the datadase.
        newUserData.email = newUserData.email.toLowerCase();
        return newUserData;
      },
      //Here, we use the beforeUpdate hook to make all of the characters lower case in an updated email address, before updating the database.
       beforeUpdate(newUserData) {
        newUserData.email = newUserData.email.toLowerCase();
        return newUserData;
       }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;

