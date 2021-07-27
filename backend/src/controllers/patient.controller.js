const { Router } = require('express')
const router = Router()

const Patient = require('../models/patient.model')

router.post("/" ,async(req,res)=>{
    await Patient.create(req.body)
    const patients = await Patient.find().lean().exec()
    res.status(200).json({patients:patients})
 
})
router.get("/" ,async(req,res)=>{
    const size =+req.query.size || 2;
    const page = +req.query.page || 1;
    const skipped = (page-1)*size;
    const total_pages = Math.ceil(await Patient.find().countDocuments()/size)
    console.log({size,page,skipped})
 
    const patients = await Patient.find().skip(skipped).limit(size).lean().exec()
    res.status(200).json({patients:patients,page:total_pages})
 
})

router.get("/sortbyage" ,async(req,res)=>{
    const age =+req.query.age ;
    const patients = await Patient.find().sort({age: age }).lean().exec()
    res.status(200).json({patients:patients})
 
})
router.get("/filterbygender" ,async(req,res)=>{
    const gender =req.query.gender ;
    const patients = await Patient.find({"gender":gender}).lean().exec()
    res.status(200).json({patients:patients})
 
})

router.get("/:name" ,async(req,res)=>{
    const name=req.params.name
    console.log(name)
 
    const patients = await Patient.findOne({"name":name}).lean().exec()
    res.status(200).json({patients:patients})
 
})




module.exports= router;