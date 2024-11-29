import axios from 'axios';

const API_URL = 'http://localhost:3000';

const getEmployees = async () => {
  const response = await axios.get(`${API_URL}/employees`);
  return response.data;
};

const getEmployee = async (employeeId) => {
  const response = await axios.get(`${API_URL}/employees/${employeeId}`);
  return response.data;
};

const registerEmployee = async (name, email, position) => {
  const response = await axios.post(`${API_URL}/employees`, {
    name,
    email,
    position,
  });
  return response.data;
};

export default {
  getEmployee,
  getEmployees,
  registerEmployee,
};
