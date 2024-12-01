const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../utils/constants');
const { validationResult } = require('express-validator');

// register a user from route post /api/v1/user/signup
exports.signUp = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, message: errors.array() });
    }

    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).send({
      status: true,
      message: 'User created successfully',
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      message: err.message,
    });
  }
};

// login with a user from route post /api/v1/user/login
// it returns a jwt which must be used on all employee routes
exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, message: errors.array() });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).send({
        status: false,
        message: 'Invalid Username and password',
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).send({
        status: false,
        message: 'Invalid Username and password',
      });

    const token = jwt.sign({ id: user._id }, config.jwtAuthSecret, {
      expiresIn: '1h',
    });
    res.status(200).json({ status: true, token });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

exports.userInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ status: false, message: 'User not found' });
    }
    res.status(200).json({ status: true, data: user });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

exports.protected = (req, res) =>
  res.json({ message: 'This is a protected route.', user: req.user });
