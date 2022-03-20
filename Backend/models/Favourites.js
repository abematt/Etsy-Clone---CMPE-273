const Sequelize = require('sequelize')
const sequelize = require('../database')

const FavouritesModel = sequelize.define('Favourites', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = FavouritesModel