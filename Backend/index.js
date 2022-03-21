const express = require("express")
const app = express();
const cors = require('cors')

const dotenv = require('dotenv');
const sequelize = require('./database');

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")


app.use(cors())
dotenv.config();

app.use(express.json());
app.use("/api/user",userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
// app.get("/api", async(req,res)=>{
//     console.log("Inside Products")
// //     const product_list = "SELECT * from Products";
// //     let [rows] = await query(product_list);
// //     res.send(rows)
// })


app.listen(3001);
console.log("Server listening on 3001");