const Sequelize = require('sequelize')
const sequelize = require('../database')

const UserModel = sequelize.define('Shops',{
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
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = UserModel