'use strict';
const bcrypt = require('bcryptjs')
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
      User.hasMany(models.Favorite)
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate:(user,options) =>{
        user.role = 'user'
        try{
          const salt = bcrypt.genSaltSync(10)
          user.password = bcrypt.hashSync(user.password,salt)
        }
        catch(err){
          console.log(err)
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
