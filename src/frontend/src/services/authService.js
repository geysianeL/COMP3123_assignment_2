import axios from 'axios';

const API_URL = 'http://localhost:3000';

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

const createUser = async (email, username, password) => {
  const response = await axios.post(`${API_URL}/signup`, {
    email,
    username,
    password,
  });
  return response.data;
};

export default {
  login,
  createUser,
};
