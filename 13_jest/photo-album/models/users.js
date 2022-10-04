'use strict';

const { Model } = require('sequelize');
// const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Photos)
    }
  }
  Users.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "username is already exist"
      },
      validate: {
        notEmpty: {
          args: true,
          msg: "username is required"
        },
        notNull: {
          msg: 'username is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "password is required"
        },
        notNull: {
          msg: 'password is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "email is already exist"
      },
      validate: {
        notEmpty: {
          args: true,
          msg: "email is required"
        },
        notNull: {
          msg: 'email is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
    // hooks: {
    //   beforeValidate: (user,opt) => {
    //     const hashedPass = hashPassword(user.password);
    //     console.log(hashedPass);
    //     user.password = hashedPass;
    //   }
    // }
  });
  return Users;
};