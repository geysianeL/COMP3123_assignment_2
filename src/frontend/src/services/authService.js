import axios from 'axios';
import tokenService from './tokenService';

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

const isLoggedIn = async () => {
  try {
    let token = tokenService.getToken();
    const response = await axios.get(`${API_URL}/protected`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.status === 200;
  } catch {
    return false;
  }
};

const getUserInfo = async () => {
  try {
    let token = tokenService.getToken();
    const response = await axios.get(`${API_URL}/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch {
    return false;
  }
};

export default {
  login,
  createUser,
  isLoggedIn,
  getUserInfo,
};
