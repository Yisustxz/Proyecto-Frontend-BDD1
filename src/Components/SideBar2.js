import React, { useState } from "react";
import Logo from "../Image/logo.png";
import { GiCarWheel } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { MdCarRepair } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { BsArchiveFill } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function SideBar2() {
  const [showPersonal, setShowPersonal] = useState(false);
  const [showConcesionario, setShowConsecionario] = useState(false);
  const [showProductos, setShowProductos] = useState(false);
  const [showServicios, setShowServicios] = useState(false);
  const [showDetalleServicio, setShowDetalleServicio] = useState(false);
  const [showPagos, setShowPagos] = useState(false);
  const [showMantenimiento, setShowMantenimiento] = useState(false);
  const [showMantenimientoR, setShowMantenimientoR] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const togglePersonal = () => {
    setShowPersonal(!showPersonal);
  };
  const toggleConcesionario = () => {
    setShowConsecionario(!showConcesionario);
  };
  const toggleProductos = () => {
    setShowProductos(!showProductos);
  };
  const toggleServicios = () => {
    setShowServicios(!showServicios);
  };
  const toggleDetalleServicio = () => {
    setShowDetalleServicio(!showDetalleServicio);
  };
  const togglePagos = () => {
    setShowPagos(!showPagos);
  };
  const toggleMantenimiento = () => {
    setShowMantenimiento(!showMantenimiento);
  };
  const toggleMantenimientoR = () => {
    setShowMantenimientoR(!showMantenimientoR);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="flex flex-col h-screen w-72  bg-gray-800 text-white bg-fondo">
      <div className="flex items-center justify-center h-22 border-b border-slate-400">
        <img class="w-full" src={Logo} />
      </div>
      <div className="flex flex-col items-start justify-start flex-grow p-4 overflow-y-auto">
        <div class="  h-11 w-full flex flex-row items-center mt-2 px-3">
          <GiCarWheel color={"#fff"} size={30} style={{ marginRight: '7px' }} />
          <div className={selectedOption === "Concesionarios" ? "bg-[#478F4D] rounded cursor-pointer h-10 w-4/5 flex flex-row items-center pl-2 " : "cursor-pointer"}
            onClick={() => handleOptionClick("Concesionarios")}>
            <Link to="/Concesionarios">
              <div onClick={toggleConcesionario} class="cursor-pointer">
                <h1 style={{ color: '#fff' }}>Concesionarios</h1>
              </div>
            </Link>
          </div>
        </div>

        {showConcesionario ? (
          <ul>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/Estados">
                <div
                  className={selectedOption === "Estados" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer"}
                  onClick={() => handleOptionClick("Estados")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Estados</h1>
                </div>
              </Link>
            </div>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/Ciudades">
                <div
                  className={selectedOption === "Ciudades" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer "}
                  onClick={() => handleOptionClick("Ciudades")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Ciudades</h1>
                </div>
              </Link>
            </div>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/ModelosPosee">
                <div
                  className={selectedOption === "Modelos que posee" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer "}
                  onClick={() => handleOptionClick("Modelos que posee")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Modelos que posee</h1>
                </div>
              </Link>
            </div>
          </ul>
        ) : null}
        <div class="  h-11 w-full flex flex-row items-center mt-2 px-3">
          <FaUserFriends color={"#fff"} size={30} style={{ marginRight: '7px' }} />
          <div className={selectedOption === "Personal" ? "bg-[#478F4D] rounded cursor-pointer h-10 w-4/5 flex flex-row items-center pl-2 " : "cursor-pointer"}
            onClick={() => handleOptionClick("Personal")}>
            <Link to="/Personal">
              <div onClick={togglePersonal} class="cursor-pointer">
                <h1 style={{ color: '#fff' }}>Personal</h1>
              </div>
            </Link>
          </div>
        </div>
        {showPersonal ? (
          <ul>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/Trabajador">
                <div
                  className={selectedOption === "Trabajador" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer"}
                  onClick={() => handleOptionClick("Trabajador")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Trabajador</h1>
                </div>
              </Link>
            </div>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/Encargado">
                <div
                  className={selectedOption === "Encargado" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer "}
                  onClick={() => handleOptionClick("Encargado")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Encargado</h1>
                </div>
              </Link>
            </div>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/Especializaciones">
                <div
                  className={selectedOption === "Especializaciones" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer"}
                  onClick={() => handleOptionClick("Especializaciones")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Especializaciones</h1>
                </div>
              </Link>
            </div>
          </ul>
        ) : null}
        <div class="  h-11 w-full flex flex-row items-center mt-2 px-3">
          <MdCarRepair color={"#fff"} size={30} style={{ marginRight: '7px' }} />
          <div className={selectedOption === "Servicios" ? "bg-[#478F4D] rounded cursor-pointer h-10 w-4/5 flex flex-row items-center pl-2 " : "cursor-pointer"}
            onClick={() => handleOptionClick("Servicios")}>
            <Link to="/Servicios">
              <div onClick={toggleServicios} class="cursor-pointer">
                <h1 style={{ color: '#fff' }}>Servicios</h1>
              </div>
            </Link>
          </div>
        </div>
        {showServicios ? (
          <ul>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/Actividades">
                <div
                  className={selectedOption === "Actividades" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer"}
                  onClick={() => handleOptionClick("Actividades")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Actividades</h1>
                </div>
              </Link>
            </div>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/Descuentos">
                <div
                  className={selectedOption === "Descuentos" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer "}
                  onClick={() => handleOptionClick("Descuentos")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Descuentos</h1>
                </div>
              </Link>
            </div>
          </ul>
        ) : null}
        <div class="  h-11 w-full flex flex-row items-center mt-2 px-3">
          <AiOutlineFileDone color={"#fff"} size={30} style={{ marginRight: '7px' }} />
          <div className={selectedOption === "Órdenes de Servicio" ? "bg-[#478F4D] rounded cursor-pointer h-10 w-4/5 flex flex-row items-center pl-2 " : "cursor-pointer"}
            onClick={() => handleOptionClick("Órdenes de Servicio")}>
            <Link to="/OrdenesServicio">
              <div onClick={toggleDetalleServicio} class="cursor-pointer">
                <h1 style={{ color: '#fff' }}>Órdenes de Servicio</h1>
              </div>
            </Link>
          </div>
        </div>
        {showDetalleServicio ? (
          <ul>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/DetallesServicio">
                <div
                  className={selectedOption === "Detalles de Servicio" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer"}
                  onClick={() => handleOptionClick("Detalles de Servicio")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Detalles de Servicio</h1>
                </div>
              </Link>
            </div>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/ProductosUtilizados">
                <div
                  className={selectedOption === "Productos Utilizados" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer"}
                  onClick={() => handleOptionClick("Productos Utilizados")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Productos Utilizados</h1>
                </div>
              </Link>
            </div>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/EspecificacionesActividades">
                <div
                  className={selectedOption === "Especificaciones Actividades" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer"}
                  onClick={() => handleOptionClick("Especificaciones Actividades")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Especificaciones Actividades </h1>
                </div>
              </Link>
            </div>
          </ul>
        ) : null}
        <div class="  h-11 w-full flex flex-row items-center mt-2 px-3">
          <AiOutlineCar color={"#fff"} size={30} style={{ marginRight: '7px' }} />
          <div className={selectedOption === "Modelos" ? "bg-[#478F4D] rounded cursor-pointer h-10 w-4/5 flex flex-row items-center pl-2 " : "cursor-pointer"}
            onClick={() => handleOptionClick("Modelos")}>
            <Link to="/Modelos">
              <div onClick={toggleMantenimientoR} class="cursor-pointer">
                <h1 style={{ color: '#fff' }}>Modelos</h1>
              </div>
            </Link>
          </div>
        </div>
        {showMantenimientoR ? (
          <ul>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/MantenimientosRecomendados">
                <div
                  className={selectedOption === "Mantenimientos Recomendados" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer"}
                  onClick={() => handleOptionClick("Mantenimientos Recomendados")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Mantenimientos Recomendados</h1>
                </div>
              </Link>
            </div>
          </ul>
        ) : null}
        <div class="  h-11 w-full flex flex-row items-center mt-2 px-3">
          <AiFillCar color={"#fff"} size={30} style={{ marginRight: '7px' }} />
          <div className={selectedOption === "Vehículos" ? "bg-[#478F4D] rounded cursor-pointer h-10 w-4/5 flex flex-row items-center pl-2 " : "cursor-pointer"}
            onClick={() => handleOptionClick("Vehículos")}>
            <Link to="/Vehiculos">
              <div onClick={toggleMantenimiento} class="cursor-pointer">
                <h1 style={{ color: '#fff' }}>Vehículos</h1>
              </div>
            </Link>
          </div>
        </div>
        {showMantenimiento ? (
          <ul>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/Mantenimientos">
                <div
                  className={selectedOption === "Mantenimientos" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer"}
                  onClick={() => handleOptionClick("Mantenimientos")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Mantenimientos</h1>
                </div>
              </Link>
            </div>
          </ul>
        ) : null}
        <div class="  h-11 w-full flex flex-row items-center mt-2 px-3">
          <FaUserAlt color={"#fff"} size={30} style={{ marginRight: '7px' }} />
          <div className={selectedOption === "Clientes" ? "bg-[#478F4D] rounded cursor-pointer h-10 w-4/5 flex flex-row items-center pl-2 pr-2" : "cursor-pointer"}
            onClick={() => handleOptionClick("Clientes")}> <Link to="/Clientes"> <h1 style={{ color: '#fff' }}>Clientes</h1> </Link></div>
        </div>
        <div class="  h-11 w-full flex flex-row items-center mt-2 px-3">
          <BiEdit color={"#fff"} size={30} style={{ marginRight: '7px' }} />
          <div className={selectedOption === "Reservas" ? "bg-[#478F4D] rounded cursor-pointer h-10 w-4/5 flex flex-row items-center pl-2 " : "cursor-pointer"}
            onClick={() => handleOptionClick("Reservas")}> <Link to="/Reservas"><h1 style={{ color: '#fff' }}>Reservas</h1></Link></div>
        </div>
        <div class="  h-11 w-full flex flex-row items-center mt-2 px-3">
          <BsArchiveFill color={"#fff"} size={30} style={{ marginRight: '7px' }} />
          <div className={selectedOption === "Productos" ? "bg-[#478F4D] rounded cursor-pointer h-10 w-4/5 flex flex-row items-center pl-2 " : "cursor-pointer"}
            onClick={() => handleOptionClick("Productos")}>
            <Link to="/Productos">
              <div onClick={toggleProductos} class="cursor-pointer">
                <h1 style={{ color: '#fff' }}>Productos</h1>
              </div>
            </Link>
          </div>
        </div>
        {showProductos ? (
          <ul>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/FamiliaProductos">
                <div
                  className={selectedOption === "Familia de productos" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer"}
                  onClick={() => handleOptionClick("Familia de productos")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Familia de productos</h1>
                </div>
              </Link>
            </div>
          </ul>
        ) : null}
        <div class="  h-11 w-full flex flex-row items-center mt-2 px-3">
          <AiOutlineFile color={"#fff"} size={30} style={{ marginRight: '7px' }} />
          <div className={selectedOption === "Facturas" ? "bg-[#478F4D] rounded cursor-pointer h-10 w-4/5 flex flex-row items-center pl-2 " : "cursor-pointer"}
            onClick={() => handleOptionClick("Facturas")}>
            <Link to="/Facturas">
              <div onClick={togglePagos} class="cursor-pointer">
                <h1 style={{ color: '#fff' }}>Facturas</h1>
              </div>
            </Link>
          </div>
        </div>
        {showPagos ? (
          <ul>
            <div class="  h-11 w-full flex flex-row items-center mt-1 px-3">
              <Link to="/Pagos">
                <div
                  className={selectedOption === "Pagos" ? "bg-[#478F4D] rounded h-10 w-full flex flex-row items-center pr-2" : "cursor-pointer"}
                  onClick={() => handleOptionClick("Pagos")}
                >
                  <h1 style={{ color: '#fff', marginLeft: '10px' }}>Pagos</h1>
                </div>
              </Link>
            </div>
          </ul>
        ) : null}
      </div>
    </div>
  );
} 