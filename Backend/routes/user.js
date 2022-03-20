const router = require("express").Router();

router.get("/usertest",(req,res)=>{
    res.send("user test is successfully done");
});

router.post("/userposttest",(req,res)=>{
    const username = req.body.username
    console.log(username)
    res.send("your user name is: " +username)
    // res.send("your username is this",username)
});

module.exports = router;