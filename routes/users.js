const express = require('express'); //import express
const router  = express.Router(); 
const usersController = require('../controllers/users'); 
const multer = require('multer');
const upload = multer();

router.get('/users', usersController.getAllUsers); 
router.post('/users', usersController.newUsers); 
router.delete('/users', usersController.deleteAllUsers); 

router.get('/users/:id', usersController.getOneUsers);
router.delete('/users/:id', usersController.deleteOneUsers);

module.exports = router; // export to use in server.js
