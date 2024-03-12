import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sign from './Sign/Sign';
import LoginPage from './Login/LoginPage';

function App() {
  const user = localStorage.getItem("token");

  return (
    
    <Routes>
      {user ? (
        <Route path="/" element={<logout />} />
      ) : (
        <Route path="/" element={<Navigate replace to="/login" />} />
      )}
      <Route path="/Signup" element={<Sign />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    
    
  );
}

export default App;
