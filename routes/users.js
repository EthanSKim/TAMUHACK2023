const mongoose = require("mongoose"); //import mongoose

// Treatment schema
const TreatmentSchema = new mongoose.Schema({
    id: {type:Number, required:true},
    email: String,
    username: String,
    password: String,
    user_type: String // 0 Admin, 1 Doctor, 2 Patient
});

const Treatment = mongoose.model('Treatment', TreatmentSchema); //convert to model named Treatment
module.exports = Treatment; //export for controller use