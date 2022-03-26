const router = require("express").Router();
const { response } = require("express");
const productsModel = require('../models/Products');
const UserModel = require("../models/User");

//Add a product
router.post("/",async(req,res)=>{
    const newProduct = {
        shop_id: req.body.shop_id,
        price: req.body.price,
        title: req.body.title,
        product_img: req.body.product_img,
        quantity: req.body.quantity,
        description: req.body.description, 
        category: req.body.category,
    }
    const product = await productsModel.create(newProduct)

    if(product.toJSON()) {
        res.send({success:true, message: 'Product Created'})
    }
    else {
        res.send({success:false, message:'Something went wrong'})
    }

});

//Get all product
router.get('/',async(req,res)=>{
    const allProducts = await productsModel.findAll()
    res.send(allProducts)
});

//Get one product
router.get('/find/:id',async(req,res)=>{
    const product = await productsModel.findByPk(req.params.id);
    if (product) {
        res.send({ product:product,success:true,code:200})
    }
    else {
        res.send({success:false,code:404})
    }
})

router.get('/shop/:id', async(req,res)=>{
    const shopProducts = await productsModel.findAll({
        where: {shop_id: req.params.id}
    })
    if (shopProducts) {
        res.send({succes:true,shopProducts: shopProducts})
    }
    else {
        res.send({success:false,shopProducts:{}})
    }
})
module.exports = router;