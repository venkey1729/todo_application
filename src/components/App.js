// src/components/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ToDoList from './ToDo/ToDoList';
import AddToDo from './ToDo/AddToDo';
import EditToDo from './ToDo/EditToDo';
import ToDoDetail from './ToDo/ToDoDetail';
import Logout from './Session/Logout';
import SessionInfo from './Session/SessionInfo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todos" element={<ToDoList />} />
        <Route path="/add" element={<AddToDo />} />
        <Route path="/edit/:id" element={<EditToDo />} />
        <Route path="/todo/:id" element={<ToDoDetail />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/session" element={<SessionInfo />} />
      </Routes>
    </div>
  );
}

export default App;
