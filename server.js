require('dotenv').config();

const mongoose = require('mongoose');

//establish connection to database
mongoose.connect(
    process.env.MONGODB_URI,
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection : Ready state is:", mongoose.connection.readyState);
    }
);
