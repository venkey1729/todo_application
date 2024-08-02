// src/components/ToDo/ToDoDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import todoService from '../../services/todoService';
import './ToDo.css';

function ToDoDetail() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const data = await todoService.getTodoById(id);
        setTodo(data);
      } catch (err) {
        console.error('Failed to fetch todo details:', err);
        setError('Failed to fetch todo details.');
      } finally {
        setLoading(false);
      }
    };
    fetchTodo();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!todo) return <p>Todo not found</p>;

  return (
    <div className="todo-detail-container">
      <h1>To-Do Details</h1>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p>Status: {todo.completed ? 'Completed' : 'Incomplete'}</p>
    </div>
  );
}

export default ToDoDetail;
