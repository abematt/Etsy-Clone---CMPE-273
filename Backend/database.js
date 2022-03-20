const Sequelize = require('sequelize')

const sequelize = new Sequelize('EtsyClone','admin','admin123',{
    dialect: 'mysql',
    host: 'etsy-clone-db.c2aq9j2znhbl.us-east-1.rds.amazonaws.com'
})

module.exports = sequelize