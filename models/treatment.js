const mongoose = require("mongoose"); //import mongoose

// Treatment schema
const TreatmentSchema = new mongoose.Schema({
    name: String,
    disease_id: Number,
    uses: String,
    dosage: String,
    frequency: String,
    side_effects: String,
    comments: Array
});

const Treatment = mongoose.model('Treatment', TreatmentSchema); //convert to model named Treatment
module.exports = Treatment; //export for controller use