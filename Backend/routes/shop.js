const router = require("express").Router();
const ShopsModel = require("../models/Shop")

router.post("/add", async (req,res)=>{
    const newShop = {
        user_id: req.body.user_id,
        name: req.body.name,
        description: req.body.description,
    }
    const shop = await ShopsModel.create(newShop)

    if(shop.toJSON()){
        res.send({success: true, message: 'Shop Successfully created!'})
    }
    else {
        res.send({success: false, message: 'Could not create Shop'})
    }
});

router.post("/check_name", async (req,res)=>{
    console.log("reached here")
    console.log(req.body)
    const shopResult = await ShopsModel.findOne({
        where: {name: req.body.name}
    })
    if(shopResult) {
        res.send( {success:false,message:'Shop Name Taken'})
    }
    else {
        res.send({success:true,message:'Shop Name Available'})
    }
})
module.exports = router;

router.get("/get_shop/:id", async(req,res)=>{
    console.log(req.params.id)
    const shopResult = await ShopsModel.findOne({
        where: {user_id: req.params.id}
    })
    if (shopResult) {
        res.send({success:true,shopDetails: shopResult.toJSON()})
    }
    else {
        res.send({success:false,shopDetails:{}})
    }

})