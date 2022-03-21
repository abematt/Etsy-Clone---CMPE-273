const Sequelize = require('sequelize')
const sequelize = require('../database')

const ProductsModel = sequelize.define('Products',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    shop_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product_img: {
        type: Sequelize.STRING,
        allowNull: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    category:{
        type: Sequelize.STRING,
        allowNull: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = ProductsModel