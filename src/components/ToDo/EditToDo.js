// src/components/ToDo/EditToDo.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import todoService from '../../services/todoService';

function EditToDo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const todo = await todoService.getTodoById(id);
        setTitle(todo.title);
        setDescription(todo.description);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchTodo();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await todoService.updateTodo(id, { title, description });
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
      <button type="submit">Update To-Do</button>
    </form>
  );
}

export default EditToDo;
