// src/services/todoService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const getTodos = async () => {
  const { data } = await axios.get(`${API_URL}/todos`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

const getTodoById = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/todos/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return data;
  } catch (error) {
    console.error('Error fetching the todo item:', error);
    throw error;
  }
};

const addTodo = async (todoData) => {
  await axios.post(`${API_URL}/todos`, todoData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};

const updateTodo = async (id, todoData) => {
  await axios.put(`${API_URL}/todos/${id}`, todoData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};

const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/todos/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};

// eslint-disable-next-line
export default { getTodos, getTodoById, addTodo, updateTodo, deleteTodo };