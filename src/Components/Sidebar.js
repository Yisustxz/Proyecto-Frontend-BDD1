import React, { useState } from "react";
import Logo from "../Image/logo.png";

export default function Sidebar(){
    const [showPersonal, setShowPersonal] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

  const togglePersonal = () => {
    setShowPersonal(!showPersonal);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (  
    <div>
    <div class="w-1/6 h-screen bg-fondo">
      <img class="w-full" src={Logo}/>  
      <div class="inline-block w-4/5 h-0.5 bg-slate-300 ml-6"/>
      <ul class="text-white ml-4 mr-4">
        <li className={selectedOption === "Concesionarios" ? "bg-[#478F4D] cursor-pointer rounded mb-2" : "cursor-pointer mb-2"}
                onClick={() => handleOptionClick("Concesionarios")}>Concesionarios</li>

        <li onClick={togglePersonal} class="cursor-pointer mb-2">
          Personal
          {showPersonal ? (
            <ul>
              <li
                className={selectedOption === "Trabajador" ? "bg-[#478F4D] rounded mb-2 mt-2 ml-3" : "cursor-pointer mb-2 mt-2 ml-3"}
                onClick={() => handleOptionClick("Trabajador")}
              >
                Trabajador
              </li>
              <li
                className={selectedOption === "Encargado" ? "bg-[#478F4D] rounded mb-2 ml-3" : "cursor-pointer mb-2 ml-3"}
                onClick={() => handleOptionClick("Encargado")}
              >
                Encargado
              </li>
            </ul>
          ) : null}
        </li>
        <li className={selectedOption === "Servicios" ? "bg-[#478F4D] rounded cursor-pointer mb-2" : "cursor-pointer mb-2"}
                onClick={() => handleOptionClick("Servicios")}>Servicios</li>
        <li className={selectedOption === "Órdenes de Servicio" ? "bg-[#478F4D] rounded cursor-pointer mb-2" : "cursor-pointer mb-2"}
                onClick={() => handleOptionClick("Órdenes de Servicio")}>Órdenes de Servicio</li>
        <li className={selectedOption === "Modelos" ? "bg-[#478F4D] rounded cursor-pointer mb-2" : "cursor-pointer mb-2"}
                onClick={() => handleOptionClick("Modelos")}>Modelos</li>
        <li className={selectedOption === "Vehículos" ? "bg-[#478F4D] rounded cursor-pointer mb-2" : "cursor-pointer mb-2"}
                onClick={() => handleOptionClick("Vehículos")}>Vehículos</li>
        <li className={selectedOption === "Clientes" ? "bg-[#478F4D] rounded cursor-pointer mb-2" : "cursor-pointer mb-2"}
                onClick={() => handleOptionClick("Clientes")}>Clientes</li>
        <li className={selectedOption === "Reservas" ? "bg-[#478F4D] rounded cursor-pointer mb-2" : "cursor-pointer mb-2"}
                onClick={() => handleOptionClick("Reservas")}>Reservas</li>
        <li className={selectedOption === "Productos" ? "bg-[#478F4D] rounded cursor-pointer mb-2" : "cursor-pointer mb-2"}
                onClick={() => handleOptionClick("Productos")}>Productos</li>
        <li className={selectedOption === "Facturas" ? "bg-[#478F4D] rounded cursor-pointer mb-2" : "cursor-pointer mb-2"}
                onClick={() => handleOptionClick("Facturas")}>Facturas</li>
      </ul>
    </div>
    </div>
  );
}


