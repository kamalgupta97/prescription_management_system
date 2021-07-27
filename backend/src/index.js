const express = require('express')
const app = express()
const cors = require("cors")
const passport = require('passport')
const cookieSession = require('cookie-session')
require('./passport.setup')

app.use(cors())
app.use(express.json())
const connect = require('./config/db')
app.use(cookieSession({
    name: 'exam-session',
    keys: ['key1', 'key2']
  }))
  const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}
app.use(passport.initialize());
app.use(passport.session());



const medicineController = require('./controllers/medicine.controller')
const patientController = require('./controllers/patient.controller')
const patientPrescriptionController=require('./controllers/patientPrescription.controller.js')

app.use("/medicines",medicineController)
app.use("/patient",patientController)
app.use("/patientPrescription",patientPrescriptionController)

app.get("/",isLoggedIn,(req,res)=>{
    res.status(200).json(`Hey! Dr.${req.user.displayName} Welcome To the Doctor Prescription App`)
})
app.get('/failed',(req,res)=>
    res.send('Failed')
)



app.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {

    res.redirect('/');
  });


  app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})









app.listen(7777,async()=>{
    await connect()
    console.log("Listening on Port 7777")
})