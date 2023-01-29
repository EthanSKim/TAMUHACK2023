//GET '/users'
const getAllUsers = (req, res, next) => {
    res.json({message: "GET all users"});
};

//POST '/users'
const newUsers = (req, res, next) => {
    res.json({message: "POST new users"});
};

//DELETE '/users'
const deleteAllUsers = (req, res, next) => {
    res.json({message: "DELETE all users"});
};

//GET '/users/:id'
const getOneUsers = (req, res, next) => {
    res.json({message: "GET 1 users"});
};

//POST '/users/:id'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 users comment"});
};

//DELETE '/users/:id'
const deleteOneUsers = (req, res, next) => {
    res.json({message: "DELETE 1 users"});
};

//export controller functions
module.exports = {
    getAllUsers, 
    newUsers,
    deleteAllUsers,
    getOneUsers,
    newComment,
    deleteOneUsers
};