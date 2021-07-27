const {Schema,model} = require('mongoose');


const patientSchema = new Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true}
})


const Patient = model("Patient",patientSchema)

module.exports= Patient