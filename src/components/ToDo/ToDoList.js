// src/components/ToDo/ToDoList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import todoService from '../../services/todoService';
import './ToDo.css';

function ToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await todoService.getTodos();
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await todoService.deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  return (
    <div className="todo-container">
      <h1> To-Do List</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item">
            <Link to={`/todo/${todo._id}`} className="todo-link">
              {todo.title}
            </Link>
            <div className="todo-actions">
              <Link to={`/edit/${todo._id}`} className="button-primary">
                Edit
              </Link>
              <button
                onClick={() => handleDelete(todo._id)}
                className="button-delete"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/add" className="button-primary">Add New To-Do</Link>
    </div>
  );
}

export default ToDoList;
