'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};