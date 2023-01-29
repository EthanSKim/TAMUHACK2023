//GET '/treatment'
const getAllTreatment = (req, res, next) => {
    res.json({message: "GET all treatment"});
};

//POST '/treatment'
const newTreatment = (req, res, next) => {
    res.json({message: "POST new treatment"});
};

//DELETE '/treatment'
const deleteAllTreatment = (req, res, next) => {
    res.json({message: "DELETE all treatment"});
};

//GET '/treatment/:id'
const getOneTreatment = (req, res, next) => {
    res.json({message: "GET 1 treatment"});
};

//POST '/treatment/:id'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 treatment comment"});
};

//DELETE '/treatment/:id'
const deleteOneTreatment = (req, res, next) => {
    res.json({message: "DELETE 1 treatment"});
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