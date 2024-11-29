const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authenticateToken = require('../middlewares/authMidleware');
const employeeController = require('../controllers/employeeController');

// there is additional middleware `authenticateToken` for checking jwt
router.get('/employees', authenticateToken, employeeController.listEmployee);
router.get('/employees/:eid', authenticateToken, employeeController.getEmployee);
router.post('/employees', authenticateToken,
    [
        check('first_name').notEmpty().withMessage('Please provide a first_name'),
        check('last_name').notEmpty().withMessage('Please provide a last_name'),
        check('email').isEmail().withMessage('Please provide a valid email'),
        check('date_of_joining').isDate().withMessage('date_of_joining must be a date')
    ], employeeController.createEmployee);
router.put('/employees/:eid', authenticateToken, 
    [
        check('first_name').notEmpty().withMessage('Please provide a first_name'),
        check('last_name').notEmpty().withMessage('Please provide a last_name'),
        check('email').isEmail().withMessage('Please provide a valid email'),
        check('date_of_joining').isDate().withMessage('date_of_joining must be a date')
    ],
    employeeController.updateEmployee);
router.delete('/employees', authenticateToken, employeeController.deleteEmployee);

module.exports = router;