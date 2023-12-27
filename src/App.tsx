import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/AboutMe" element={<AboutMe />} />
          </Routes>  
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
