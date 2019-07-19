// Dependencies
// =============================================================

// // Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
      name: DataTypes.STRING,
      // image: DataTypes.TEXT('medium'),
      category: DataTypes.STRING,
      note: DataTypes.STRING,
      status: DataTypes.BOOLEAN
      // price: DataTypes.FLOAT
    });
  
    Job.associate = function (models){
      Job.belongsTo(models.User,{
        foreignKey:{
          allowNull: true
        }
      })
    }
  
    return Job;
  }