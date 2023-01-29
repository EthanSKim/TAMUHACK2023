const mongoose = require("mongoose"); //import mongoose

// Users schema
const UsersSchema = new mongoose.Schema({
    id: {type:Number, required:true},
    email: String,
    username: String,
    password: String,
    user_type: String // 0 Admin, 1 Doctor, 2 Patient
});
//GetRidOfUsername
const Users = mongoose.model('Users', UsersSchema); //convert to model named Users
module.exports = Users; //export for controller use