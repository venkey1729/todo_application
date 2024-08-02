// src/components/Session/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    authService.logout();
    navigate('/login');
  }, [navigate]);

  return <div>Logging out...</div>;
}

export default Logout;
