//import treatement model
const Treatment = require('../models/treatement');

//GET '/treatement'
const getAllTreatment = (req, res, next) => {
    Treatment.find({}, (err, data)=> {
        if (err || !data){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST '/treatement'
const newTreatment = (req, res) => {
    //check if the treatement _id already exists in db
    Treatment.findOne({ _id: req.body._id }, (err, data) => {
        //if treatement not in db, add it
        if (!data) {
            //create a new treatement object using the Treatment model and req.body
            const newTreatment = new Treatment({
                name: req.body.name,
                disease_id: req.body.disease_id,
                uses: req.body.uses,
                dosage: req.body.dosage,
                frequency: req.body.frequency,
                side_effects: req.body.side_effects,
                comments: req.body.comments
            })

            // save this object to database
            newTreatment.save((err, data)=>{
                if(err){
                    console.log(data._id);
                    return res.json({Error: err});
                } 
                return res.json(data);
            })
        //if there's an error or the treatement is in db, return a message         
        }else{
            if(err){
                return res.json(`Error in newTreatment POST ${err}`);
            }
            return res.json({message:"Treatment already exists"});
        }
    })    
};

//DELETE '/treatement'
const deleteAllTreatment = (req, res, next) => {
    Treatment.deleteMany({}, (err)=> {
        if (err){
            return res.json({Error: err});
        }
        return res.json("Deleted all Treatment");
    })
};

//GET '/treatement/:_id'
const getOneTreatment = (req, res, next) => {
    let _id = req.params._id;
    
    Treatment.findOne({_id:_id}, (err, data)=> {
        if (err || !data){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST '/treatment/:_id'
const newComment = (req, res, next) => {
    let _id = req.params._id;
    let newComment = req.body.comment; //get the comment

    const comment = {
        text: newComment,
        date: new Date()
    }

    Treatment.findOne({ _id: _id }, (err, data) => {
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
const deleteOneTreatment = (req, res, next) => {
    let _id = req.params._id; 

    Treatment.deleteOne({_id:_id}, (err,data)=> {
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
    getAllTreatment, 
    newTreatment,
    deleteAllTreatment,
    getOneTreatment,
    newComment,
    deleteOneTreatment
};

