const { Router } = require('express')
const router = Router()
const PatientPrescription = require('../models/pateintPrescriptio.model')
router.get("/",async(req,res)=>{
    const patientPrescription =await PatientPrescription.find().populate("medcine_id").populate("patient_id").lean().exec()
    res.status(200).json(patientPrescription)
})


router.get("/documentcount",async(req,res)=>{
    console.log(req.params.id)
    const patientPrescription =await PatientPrescription.find({patient_id:{"_id":req.params.id}}).lean().exec()
    res.status(200).json(patientPrescription)
})

router.post("/",async(req,res)=>{
    await PatientPrescription.create(req.body)
    const patientPrescription =await PatientPrescription.find().lean().exec()
    res.status(201).json(patientPrescription)
})



module.exports= router;