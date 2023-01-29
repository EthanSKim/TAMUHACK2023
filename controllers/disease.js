//import disease model
const Disease = require('../models/disease');

//GET '/disease'
const getAllDisease = (req, res, next) => {
    res.json({message: "GET all disease"});
};

//POST '/disease'
const newDisease = (req, res) => {
    //check if the disease name already exists in db
    Disease.findOne({ name: req.body.name }, (err, data) => {
        //if disease not in db, add it
        if (!data) {
            //create a new disease object using the Disease model and req.body
            const newDisease = new Disease({
                id: req.body.id,
                name: req.body.name,
                causes: req.body.causes,
                symptoms: req.body.symptoms,
                desc: req.body.desc,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                comments: req.body.comments,
                user_id: req.body.user_id
            })

            // save this object to database
            newDisease.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        //if there's an error or the disease is in db, return a message         
        }else{
            if(err) return res.json(`Error in newDisease POST ${err}`);
            return res.json({message:"Disease already exists"});
        }
    })    
};


//DELETE '/disease'
const deleteAllDisease = (req, res, next) => {
    res.json({message: "DELETE all disease"});
};

//GET '/disease/:id'
const getOneDisease = (req, res, next) => {
    res.json({message: "GET 1 disease"});
};

//POST '/disease/:id'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 disease comment"});
};

//DELETE '/disease/:id'
const deleteOneDisease = (req, res, next) => {
    res.json({message: "DELETE 1 disease"});
};

//export controller functions
module.exports = {
    getAllDisease, 
    newDisease,
    deleteAllDisease,
    getOneDisease,
    newComment,
    deleteOneDisease
};