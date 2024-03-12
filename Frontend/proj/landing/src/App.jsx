import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Landing1 from './Landing1.jsx';
import LoginPage from './Login/LoginPage.jsx';
import Sign1 from './Sign/Sign.jsx';
import Sign from './Sign1.jsx';
import Home from './Home';
import Login from './LoginPage1';
import SignPage from './Sign1';
import ChillPlacesPage from './ChillPlacesPage';
import './App.css';
import Contact from './ContactUs.jsx';
import Euro from './EuropePack/European.jsx';
import India from './IndPack/IndiaPackage.jsx';
import Island from './Island/Island.jsx';
import Hong from './HongKong/HongKong.jsx';
import Dubai from './Dubai/Dubai.jsx';
import Spml from './SPML/spml.jsx';
import Top from './Top.jsx';
import Inter from './Internation.jsx';
import Honey from './Honeymoon.jsx';
import Thai from './Thailand/ThailandPack.jsx';
import Book from './Contact.jsx';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing1/>} />
        <Route path="/Sign" element={<Sign1 />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ChillPlacesPage" element={<ChillPlacesPage />} />
        <Route path="/login1" element={<Login />} />
        <Route path="/sign1" element={<Sign />} />
        <Route path="/euro" element={<Euro />} />
        <Route path="/india" element={<India />} />
        <Route path="/island" element={<Island />} />
        <Route path="/hong" element={<Hong />} />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/spml" element={<Spml />} />
        <Route path="/top" element={<Top />} />
        <Route path="/inter" element={<Inter />} />
        <Route path="/honey" element={<Honey />} />
        <Route path="/thai" element={<Thai />} />
        <Route path='/cont' element={<Contact/>}/>
        <Route path='/book' element={<Book/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
