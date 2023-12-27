import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
