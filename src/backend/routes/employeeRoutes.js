const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authMidleware = require('../middlewares/authMidleware');
const employeeController = require('../controllers/employeeController');

router.get('/employees', authMidleware, employeeController.listEmployee);
router.get('/employees/:eid', authMidleware, employeeController.getEmployee);
router.post(
  '/employees',
  authMidleware,
  [
    check('first_name').notEmpty().withMessage('Please provide a first_name'),
    check('last_name').notEmpty().withMessage('Please provide a last_name'),
    check('email').isEmail().withMessage('Please provide a valid email'),
    check('date_of_joining')
      .isDate()
      .withMessage('date_of_joining must be a date'),
  ],
  employeeController.createEmployee,
);
router.put(
  '/employees/:eid',
  authMidleware,
  [
    check('first_name').notEmpty().withMessage('Please provide a first_name'),
    check('last_name').notEmpty().withMessage('Please provide a last_name'),
    check('email').isEmail().withMessage('Please provide a valid email'),
    check('date_of_joining')
      .isDate()
      .withMessage('date_of_joining must be a date'),
  ],
  employeeController.updateEmployee,
);
router.delete('/employees', authMidleware, employeeController.deleteEmployee);

module.exports = router;
