// src/services/authService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth';

  const register = async (userData) => {
  await axios.post(`${API_URL}/register`, userData);
};

  const login = async (userData) => {
  const { data } = await axios.post(`${API_URL}/login`, userData);
  localStorage.setItem('token', data.token);
};

  const logout = () => {
  localStorage.removeItem('token');
};

  const getSessions = async () => {
  const { data } = await axios.get(`${API_URL}/sessions`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};
// eslint-disable-next-line
 export default{
     register,
      login, 
      logout,
       getSessions,
     };

