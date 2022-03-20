const express = require("express")
const app = express();
const cors = require('cors')
const Sequelize = require('sequelize')
const mysql = require('mysql2/promise');

app.use(cors())

const dbConfig = {
    host: 'etsy-clone-db.c2aq9j2znhbl.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    database: 'EtsyClone'
}

let conn = null 

const connect = async () => {
    if (conn) return conn;
    conn = await mysql.createConnection(dbConfig);
    return conn;
}

connect().then(r => console.log("Successfully created a conn"))

const query = async (sqlQuery) => {
    return conn.execute(sqlQuery)
}

app.get("/products", async(req,res)=>{
    console.log("Inside Products")
    const product_list = "SELECT * from Products";
    let [rows] = await query(product_list);
    res.send(rows)
})

// async function connectToAWSDB() {
//     try {
//         await sequelize.authenticate()
//         console.log("Successfully connected")
//         sequelize.sync()
//     }
//     catch( err) {
//         console.log(err)
//     }
// }

// const sequelize = new Sequelize('etsy-clone-db','admin','admin123',{
//     dialect: 'mysql',
//     host: 'etsy-clone-db.c2aq9j2znhbl.us-east-1.rds.amazonaws.com'
// })

// connectToAWSDB()
app.listen(3001);
console.log("Server listening on 3001");