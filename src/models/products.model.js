const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const ProductsModel = db.define('products', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    isAvalible: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = ProductsModel