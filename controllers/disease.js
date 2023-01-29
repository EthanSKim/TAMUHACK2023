// post disease route
const newDisease = (req, res, next) => {
    res.json({message: "POST new disease"});
};
module.exports = {newDisease};