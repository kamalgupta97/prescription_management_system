const {Schema,model} = require('mongoose')

const patientPrescriptionSchema = new Schema({
    medcine_id:{ type: Schema.Types.ObjectId, ref: 'Medicine',required:true },
    quantity:{type:Number,required:true},
    patient_id:{ type: Schema.Types.ObjectId, ref: 'Patient', required:true}
})

const PatientPrescription = model('PatientPrescription',patientPrescriptionSchema)

module.exports=PatientPrescription