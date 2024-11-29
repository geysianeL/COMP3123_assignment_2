const Employee = require('../models/Employee');
const { validationResult } = require('express-validator');

// get specified employee from route get /api/v1/emp/employees/:eid
exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.eid);
    res.status(200).send({ status: true, message: employee});
  } catch (err) {
    res.status(400).send({ status: false, message: err.message });
  }
};

// get list of employee registered from route post /api/v1/emp/employees
exports.listEmployee = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).send({ status: true, message: employees});
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

// update specified employee from route put /api/v1/emp/employees/:eid
exports.updateEmployee = async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, message: errors.array() });
    }
    
    let result = await Employee.findByIdAndUpdate(req.params.eid, req.body)
    res.status(200).send({ status: true, message: result });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

// create specified employee from route post /api/v1/emp/employees
exports.createEmployee = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, message: errors.array() });
    }

    let result = await Employee.create(req.body)
    res.status(200).send({ status: true, message: result });
  } catch (err) {
    res.status(400).send({ status: false, message: err.message });
  }
};

// delete specified employee from route put /api/v1/emp/employees?eid=number
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.query.eid)
    res.status(200).send({ status: true, message: "Employee deleted successfully" });
  } catch (err) {
    res.status(400).send({ status: false, message: err.message });
  }
};