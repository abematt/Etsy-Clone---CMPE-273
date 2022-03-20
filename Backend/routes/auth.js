const router = require("express").Router();
const UserModel = require("../models/User")
const jwt = require('jsonwebtoken')
const CryptoJS = require('crypto-js')

//REGISTER
router.post("/register", async (req,res)=>{
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.PASS_SEC
            ).toString(),
    }
    const user = await UserModel.create(newUser)

    if(user.toJSON()){
        res.send({success: true, message: 'Account Successfully created!'})
    }
    else {
        res.send({success: false, message: 'Could not create user'})
    }
});

//LOGIN
router.post("/login", async (req,res)=>{
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user){
        res.send({success: false,code:401, message:'User Does not exist'});
    }
    const hashedPassword =CryptoJS.AES.decrypt(
        user.password, 
        process.env.PASS_SEC
        );

    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        
    if (Originalpassword !== req.body.password){
        res.send({  success:false, code:401, message: 'Invalid Credentials'});
    }
    else{
        res.send({success:true, code:200,message: 'Successful Login'})
    }
})

module.exports = router;