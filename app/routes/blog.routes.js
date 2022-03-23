const express = require('express')
const router = express.Router()
const blogController = require('../actions/blog');

// Retrieve all employees
router.get('/getAllblogs', blogController.findAll);

// Create a new employee
router.post('/create', blogController.create);

// Retrieve a single employee with id
router.get('/:id', blogController.findById);

// Update a employee with id
router.put('/update/:id', blogController.update);

// Delete a employee with id
router.delete('/delete/:id', blogController.delete);

module.exports = router