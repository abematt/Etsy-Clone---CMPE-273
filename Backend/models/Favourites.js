const Sequelize = require('sequelize')
const sequelize = require('../database')

const FavouritesModel = sequelize.define('Favourites', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps: false
})

module.exports = FavouritesModel