//import treatement model
const Disease = require('../models/treatement');

//GET '/treatement'
const getAllDisease = (req, res, next) => {
    Disease.find({}, (err, data)=> {
        if (err || !data){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST '/treatement'
const newDisease = (req, res) => {
    //check if the treatement _id already exists in db
    Disease.findOne({ _id: req.body._id }, (err, data) => {
        //if treatement not in db, add it
        if (!data) {
            //create a new treatement object using the Disease model and req.body
            const newDisease = new Disease({
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
                if(err){
                    console.log(data._id);
                    return res.json({Error: err});
                } 
                return res.json(data);
            })
        //if there's an error or the treatement is in db, return a message         
        }else{
            if(err){
                return res.json(`Error in newDisease POST ${err}`);
            }
            return res.json({message:"Disease already exists"});
        }
    })    
};

//DELETE '/treatement'
const deleteAllDisease = (req, res, next) => {
    Disease.deleteMany({}, (err)=> {
        if (err){
            return res.json({Error: err});
        }
        return res.json("Deleted all Disease");
    })
};

//GET '/treatement/:_id'
const getOneDisease = (req, res, next) => {
    let _id = req.params._id;
    
    Disease.findOne({_id:_id}, (err, data)=> {
        if (err || !data){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST '/disease/:_id'
const newComment = (req, res, next) => {
    let _id = req.params._id;
    let newComment = req.body.comment; //get the comment

    const comment = {
        text: newComment,
        date: new Date()
    }

    Disease.findOne({ _id: _id }, (err, data) => {
        if (err || !data || !newComment) {
            return res.json({ Error: err });
        } else {
            data.comments.push(comment);
            data.save(err => {
                if (err) {
                    return res.json({ message: "Comment failed to add.", error: err });
                }
                return res.json(data);
            })
        }
    })
};


//DELETE '/treatement/:_id'
const deleteOneDisease = (req, res, next) => {
    let _id = req.params._id; 

    Disease.deleteOne({_id:_id}, (err,data)=> {
        if (data.deletedCount == 0){
            return res.json({message: "User doesn't exist."});
        } else if (err) {
            return res.json({Error: err});
        } else {
            return res.json({message: "User deleted."});
        }
    })
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

