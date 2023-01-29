const mongoose = require("mongoose"); //import mongoose

// disease schema
const DiseaseSchema = new mongoose.Schema({
    id: {type:Number, required:true},
    name: String,
    causes: String,
    symptoms: Array,
    desc: String,
    start_date: Date,
    end_date: Date,
    comments: String,
    user_id: Number
});

const Disease = mongoose.model('Disease', DiseaseSchema); //convert to model named Disease
module.exports = Disease; //export for controller use