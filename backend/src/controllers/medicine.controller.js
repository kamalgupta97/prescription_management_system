var express = require('express')
var router = express.Router()


const Medicines = require('../models/medicines.model')

router.get("/",async(req,res)=>{
    const medicines = await Medicines.find().lean().exec();
    res.status(200).json({data:medicines})
})
router.post("/",async(req,res)=>{
    console.log(req.body)
    const medicine = req.body
     await Medicines.create(medicine)
     const medicines = await Medicines.find().lean().exec();
        res.status(200).json(medicines)
})

module.exports= router;