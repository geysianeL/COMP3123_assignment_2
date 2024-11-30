const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const config = require('./utils/constants');

const app = express();

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*',
  }),
);

app.use(express.json());
app.use('', authRoutes);
app.use('', employeeRoutes);

// check if mongo db is running and connected
mongoose
  .connect(config.employeeDbConnectionString)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

app.listen(config.defaultPort, () => {
  console.log(`Server running at http://localhost:${config.defaultPort}`);
});
