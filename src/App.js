import './App.css';
import SideBar from './Components/SideBar';
import React, { useState } from "react";


function App() {


  return (
    <div className="flex h-screen">
      <SideBar/>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold">Concesionario</h1>
      </div>
    </div>

  )
}

export default App


