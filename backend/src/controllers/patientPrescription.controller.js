const { Router } = require('express')
const router = Router()
const PatientPrescription = require('../models/pateintPrescriptio.model')
router.get("/",async(req,res)=>{
    const patientPrescription =await PatientPrescription.find().populate("medcine_id").populate("patient_id").lean().exec()
    res.status(200).json(patientPrescription)
})


router.get("/documentcount/:id",async(req,res)=>{
 
    const patientPrescription =await PatientPrescription.find({patient_id:{"_id":req.params.id}}).count().lean().exec()
    res.status(200).json(patientPrescription)
})
router.get("/:id",async(req,res)=>{
    // const patient =await PatientPrescription.findOne({patient_id:{"_id":req.params.id}},{_id:false,medcine_id:false,quantity:false}).populate("medcine_id").populate("patient_id").lean().exec()
 
    const patientPrescription =await PatientPrescription.find({patient_id:{"_id":req.params.id}}).populate("medcine_id").populate("patient_id").lean().exec()
    // res.status(200).json({patientPrescription,patient})
    res.status(200).json(patientPrescription)
})
router.post("/",async(req,res)=>{
    await PatientPrescription.create(req.body)
    const patientPrescription =await PatientPrescription.find().lean().exec()
    res.status(201).json(patientPrescription)
})



module.exports= router;