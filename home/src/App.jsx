import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './LoginPage';
import Sign from './Sign';
import ChillPlacesPage from './ChillPlacesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChillPlacesPage" element={<ChillPlacesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default App;
