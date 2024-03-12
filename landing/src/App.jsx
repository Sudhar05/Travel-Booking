import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Landing1 from './Landing1.jsx';
import LoginPage from './LoginPage';
import SignPage from './Sign';
import Home from './Home';
import Login from './LoginPage1';
import Sign from './Sign1';
import ChillPlacesPage from './ChillPlacesPage';
//import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing1/>} />
        <Route path="/signup" element={<SignPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ChillPlacesPage" element={<ChillPlacesPage />} />
        <Route path="/login1" element={<Login />} />
        <Route path="/sign1" element={<Sign />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
