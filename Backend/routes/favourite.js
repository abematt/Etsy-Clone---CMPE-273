const router = require("express").Router();
const { response } = require("express");
const FavouritesModel = require('../models/Favourites');

router.post("/addFavs",async(req,res)=>{
    const newFav = {
        user_id: req.body.user_id,
        product_id: req.body.product_id
    }
    const result = await FavouritesModel.create(newFav)
    if (result.toJSON()) {
        res.send({ success:true,message:'Item added to favourites'})
    }
    else{
        res.send({success:false,message:'There was an error'})
    }
})

router.post('/getFavs',async(req,res)=>{
    const allFavs = await FavouritesModel.findAll({
        where: {
            user_id: req.body.user_id
        }
    })
    if(allFavs.length > 0) {
        res.send( {success: true,message: JSON.parse(JSON.stringify(allFavs))})
    }
    else {
        res.send( {success:false, message: 'Your Favourites'})
    }
})

router.post('/removeFav', async(req,res)=>{
    const result = await FavouritesModel.destroy({
        where: {
            user_id: req.body.user_id,
            product_id: req.body.product_id
        }
    })
    if(result ==1){
        res.send( { success: true,message:'Item removed'})
    }
    else 
    {
        res.send( { success: false, message:'There was an error!'})
    }
})

module.exports = router;