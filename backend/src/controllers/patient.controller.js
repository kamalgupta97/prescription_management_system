const { Router } = require('express')
const router = Router()

const Patient = require('../models/patient.model')

router.post("/" ,async(req,res)=>{
    await Patient.create(req.body)
    const patients = await Patient.find().lean().exec()
    res.status(200).json({patients:patients})
 
})
router.get("/" ,async(req,res)=>{

    const patients = await Patient.find().lean().exec()
    res.status(200).json({patients:patients})
 
})




module.exports= router;