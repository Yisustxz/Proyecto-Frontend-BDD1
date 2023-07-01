import './App.css';
import SideBar2 from './Components/SideBar2';
import React, { useState } from "react";
import Estados from './TablePages/Estados';
import Concesionarios from './TablePages/Concesionarios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar3 from './Components/SideBar3';


function App() {

  return (
    <div className="flex h-screen">
      <SideBar3/>
      <div className="flex-grow flex items-center justify-center">  
        <BrowserRouter>
        <Routes>
          <Route path='/Concesionarios' element={<Concesionarios/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>

  )
}

export default App


