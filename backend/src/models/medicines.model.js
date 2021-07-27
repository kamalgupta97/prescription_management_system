const mongoose = require('mongoose')


const medicineSchema = new mongoose.Schema({
    name:{type:String,required:true,unique: true,index: true}
})

const Medicines = mongoose.model("Medicine",medicineSchema)

module.exports= Medicines;