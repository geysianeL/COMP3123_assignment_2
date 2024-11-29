module.exports = {
  jwtAuthSecret: 'SD78FSDFSDHUJF78YAsdfuisdf78jkn9asf6',
  employeeDbConnectionString: process.env.MONGO_URI || "mongodb://localhost:27017/employees_dev_db",
  enverionment: process.env.NODE_ENV || "development",
  defaultPort: process.env.NODE_PORT || 3000,
}