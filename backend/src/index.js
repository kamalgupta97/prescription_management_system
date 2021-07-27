const express = require('express')
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const connect = require('./config/db')

const medicineController = require('./controllers/medicine.controller')
const patientController = require('./controllers/patient.controller')
const patientPrescriptionController=require('./controllers/patientPrescription.controller.js')

app.use("/medicines",medicineController)
app.use("/patient",patientController)
app.use("/patientPrescription",patientPrescriptionController)









app.get("/",(req,res)=>{
    res.status(200).json("Welcome To the Doctor Prescription App")
})


app.listen(7777,async()=>{
    await connect()
    console.log("Listening on Port 7777")
})