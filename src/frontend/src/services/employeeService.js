import axios from 'axios';
import tokenService from './tokenService';
const API_URL = 'http://localhost:3000';

const getEmployees = async () => {
  let token = tokenService.getToken();
  const response = await axios.get(`${API_URL}/employees`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const searchEmployees = async (name) => {
  let token = tokenService.getToken();
  const response = await axios.get(`${API_URL}/employees?name=${name}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const getEmployee = async (employeeId) => {
  let token = tokenService.getToken();
  const response = await axios.get(`${API_URL}/employees/${employeeId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const deleteEmployee = async (employeeId) => {
  let token = tokenService.getToken();
  const response = await axios.delete(
    `${API_URL}/employees/?eid=${employeeId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.status >= 200 || response.status < 300;
};

const registerEmployee = async (
  firstName,
  lastName,
  email,
  position,
  salary,
  dateOfJoin,
  department,
) => {
  let token = tokenService.getToken();
  const response = await axios.post(
    `${API_URL}/employees`,
    {
      first_name: firstName,
      last_name: lastName,
      email: email,
      position: position,
      salary: salary,
      date_of_joining: dateOfJoin,
      department: department,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};

const updateEmployee = async (
  id,
  firstName,
  lastName,
  email,
  position,
  salary,
  dateOfJoin,
  department,
) => {
  let token = tokenService.getToken();
  const response = await axios.post(
    `${API_URL}/employees/${id}`,
    {
      first_name: firstName,
      last_name: lastName,
      email: email,
      position: position,
      salary: salary,
      date_of_joining: dateOfJoin,
      department: department,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};

export default {
  getEmployee,
  getEmployees,
  registerEmployee,
  searchEmployees,
  updateEmployee,
  deleteEmployee,
};
