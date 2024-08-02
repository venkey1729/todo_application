// src/components/ToDo/AddToDo.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import todoService from '../../services/todoService';

function AddToDo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await todoService.addTodo({ title, description });
      navigate('/todos');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add To-Do</button>
    </form>
  );
}

export default AddToDo;
