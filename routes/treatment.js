const express = require('express'); //import express
const router  = express.Router(); 
const treatmentController = require('../controllers/treatment'); 
const multer = require('multer');
const upload = multer();

router.get('/treatment', treatmentController.getAllTreatment); 
router.post('/treatment', treatmentController.newTreatment); 
router.delete('/treatment', treatmentController.deleteAllTreatment); 

router.get('/treatment/:id', treatmentController.getOneTreatment);
router.post('/treatment/:id', treatmentController.newComment);
router.delete('/treatment/:id', treatmentController.deleteOneTreatment);

module.exports = router; // export to use in server.js
