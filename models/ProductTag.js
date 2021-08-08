const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
    },
    product_id:{
      type: DataTypes.INTEGER,
      references:{
        Model: 'product',
        key:'id',
        unique: false
      },
    tag_id:{
      id: DataTypes.INTEGER,
      references: {
        model : 'tag',
        key: 'id',
        unique: false
      }
    }
  }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
