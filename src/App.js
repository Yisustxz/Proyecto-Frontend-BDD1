import './App.css';
import SideBar2 from './Components/SideBar2';
import React, { useState } from "react";
import Estados from './TablePages/Estados';
import Concesionarios from './TablePages/Concesionarios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ciudades from './TablePages/Cuidades';
import ModelosPosee from './TablePages/ModelosPosee';
import Trabajador from './TablePages/Trabajador';
import Encargado from './TablePages/Encagado';
import Especializaciones from './TablePages/Especializaciones';
import Servicios from './TablePages/Servicios';
import Actividades from './TablePages/Actividades';
import Descuentos from './TablePages/Descuentos';
import OrdenesServicio from './TablePages/OrdenesServicio';
import DetallesServicio from './TablePages/DetallesServicio';
import ProductosUtilizados from './TablePages/ProductosUtilizados';
import EspecificacionesActividades from './TablePages/EspecificacionesActividades';
import Modelos from './TablePages/Modelos';
import MantenimientosRecomendados from './TablePages/MantenimientosRecomendados';
import Vehiculos from './TablePages/Vehiculos';
import Mantenimientos from './TablePages/Mantenimientos';
import Clientes from './TablePages/Clientes';
import Reservas from './TablePages/Reservas';
import Productos from './TablePages/Productos';
import FamiliaProductos from './TablePages/FamiliaProductos';
import Facturas from './TablePages/Facturas';
import Pagos from './TablePages/Pagos';
import EditCon from './TablePages/Concesionario/EditCon';
import AddCon from './TablePages/Concesionario/AddCon';
import AddRes from './TablePages/Reservas/AddRes';
import EditRes from './TablePages/Reservas/EditRes';
import AddCli from './TablePages/Clientes/AddCli';
import EditCli from './TablePages/Clientes/EditCli';
import AddVeh from './TablePages/Vehiculos/AddVeh';
import EditVeh from './TablePages/Vehiculos/EditVeh';
import EditMan from './TablePages/Mantenimientos/EditMan';
import AddMan from './TablePages/Mantenimientos/AddMan';
import AddModelo from './TablePages/Modelo/AddModelo';
import EditModelo from './TablePages/Modelo/EditModelo';
import EditManRec from './TablePages/MantenimientoRecomendado/EditManReco';
import AddManRec from './TablePages/MantenimientoRecomendado/AddManReco';
import EditPro from './TablePages/Producto/EditPro';
import AddPro from './TablePages/Producto/AddPro';
import EditFamPro from './TablePages/FamiliaProductos/EditFamPro';
import AddFamPro from './TablePages/FamiliaProductos/AddFamPro';
import EditFactu from './TablePages/Facturas/EditFactu';
import AddFactu  from './TablePages/Facturas/AddFactu';
import AddPagos  from './TablePages/Pagos/AddPagos';
import EditPagos from './TablePages/Pagos/EditPagos';
import AddEspeActivi  from './TablePages/EspecificacionesActividades/AddEspeActi';
import EditEspeActivi from './TablePages/EspecificacionesActividades/EditEspeActi';
import AddEspeActi from './TablePages/EspecificacionesActividades/AddEspeActi';
import EditEspeActi from './TablePages/EspecificacionesActividades/EditEspeActi';






function App() {

  return (
    <BrowserRouter>
    <div style={{backgroundColor: '#E9E9E9', height: '100%', width: '100%'}}>
    <div className="flex h-screen">
      <div style={{boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.5)"}}>
      <SideBar2/>
      </div>
      <div className="flex-grow flex items-center justify-center">  
        <Routes>
          <Route path='/Concesionarios' element={<Concesionarios/>}/>
          <Route path='/Estados' element={<Estados/>}/>
          <Route path='/Ciudades' element={<Ciudades/>}/>
          <Route path='/ModelosPosee' element={<ModelosPosee/>}/>
          <Route path='/Trabajador' element={<Trabajador/>}/>
          <Route path='/Encargado' element={<Encargado/>}/>
          <Route path='/Especializaciones' element={<Especializaciones/>}/>
          <Route path='/Servicios' element={<Servicios/>}/>
          <Route path='/Actividades' element={<Actividades/>}/>
          <Route path='/Descuentos' element={<Descuentos/>}/>
          <Route path='/OrdenesServicio' element={<OrdenesServicio/>}/>
          <Route path='/DetallesServicio' element={<DetallesServicio/>}/>
          <Route path='/ProductosUtilizados' element={<ProductosUtilizados/>}/>
          <Route path='/EspecificacionesActividades' element={<EspecificacionesActividades/>}/>
          <Route path='/Modelos' element={<Modelos/>}/>
          <Route path='/MantenimientosRecomendados' element={<MantenimientosRecomendados/>}/>
          <Route path='/Vehiculos' element={<Vehiculos/>}/>
          <Route path='/Mantenimientos' element={<Mantenimientos/>}/>
          <Route path='/Clientes' element={<Clientes/>}/>
          <Route path='/Reservas' element={<Reservas/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/FamiliaProductos' element={<FamiliaProductos/>}/>
          <Route path='/Facturas' element={<Facturas/>}/>
          <Route path='/Pagos' element={<Pagos/>}/>
          <Route path='/EditCon' element={<EditCon/>}/>
          <Route path='/AddCon' element={<AddCon/>}/>
          <Route path='/EditRes' element={<EditRes/>}/>
          <Route path='/AddRes' element={<AddRes/>}/>
          <Route path='/EditCli' element={<EditCli/>}/>
          <Route path='/AddCli' element={<AddCli/>}/>
          <Route path='/EditVeh' element={<EditVeh/>}/>
          <Route path='/AddVeh' element={<AddVeh/>}/>
          <Route path='/EditMan' element={<EditMan/>}/>
          <Route path='/AddMan' element={<AddMan/>}/>
          <Route path='/EditModelo' element={<EditModelo/>}/>
          <Route path='/AddModelo' element={<AddModelo/>}/>
          <Route path='/EditManRec' element={<EditManRec/>}/>
          <Route path='/AddManRec' element={<AddManRec/>}/>
          <Route path='/EditPro' element={<EditPro/>}/>
          <Route path='/AddPro' element={<AddPro/>}/>
          <Route path='/EditFamPro' element={<EditFamPro/>}/>
          <Route path='/AddFamPro' element={<AddFamPro/>}/>
          <Route path='/EditFactu' element={<EditFactu/>}/>
          <Route path='/AddFactu' element={<AddFactu/>}/>
          <Route path='/EditPagos' element={<EditPagos/>}/>
          <Route path='/AddPagos' element={<AddPagos/>}/>
          <Route path='/EditEspeActi' element={<EditEspeActi/>}/>
          <Route path='/AddEspeActi' element={<AddEspeActi/>}/>
        </Routes>
      </div>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App


