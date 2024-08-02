// src/components/Session/SessionInfo.js
import React, { useState, useEffect } from 'react';
import authService from '../../services/authService';

function SessionInfo() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const data = await authService.getSessions();
        setSessions(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchSessions();
  }, []);

  return (
    <div>
      <h1>Session Information</h1>
      <ul>
        {sessions.map((session, index) => (
          <li key={index}>
            {session.loginTime} - {session.ipAddress}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SessionInfo;
