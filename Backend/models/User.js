const Sequelize = require('sequelize')
const sequelize = require('../database')

const UserModel = sequelize.define('User',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
},{
    freezeTableName: true
});

module.exports = UserModel