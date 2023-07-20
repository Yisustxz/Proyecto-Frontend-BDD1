import './App.css'
import SideBar2 from './Components/SideBar2'
import Estados from './TablePages/Estados'
import Concesionarios from './TablePages/Concesionarios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ciudades from './TablePages/Ciudades'
import ModelosPosee from './TablePages/ModelosPosee'
import Trabajador from './TablePages/Trabajador'
import Encargado from './TablePages/Encagado'
import Especializaciones from './TablePages/Especializaciones'
import Servicios from './TablePages/Servicios'
import Actividades from './TablePages/Actividades'
import Descuentos from './TablePages/Descuentos'
import OrdenesServicio from './TablePages/OrdenesServicio'
import DetallesServicio from './TablePages/DetallesServicio'
import ProductosUtilizados from './TablePages/ProductosUtilizados'
import EspecificacionesActividades from './TablePages/EspecificacionesActividades'
import Modelos from './TablePages/Modelos'
import MantenimientosRecomendados from './TablePages/MantenimientosRecomendados'
import Vehiculos from './TablePages/Vehiculos'
import Mantenimientos from './TablePages/Mantenimientos'
import Clientes from './TablePages/Clientes'
import Reservas from './TablePages/Reservas'
import Productos from './TablePages/Productos'
import FamiliaProductos from './TablePages/FamiliaProductos'
import Facturas from './TablePages/Facturas'
import Pagos from './TablePages/Pagos'
import EditCon from './TablePages/Concesionario/EditCon'
import AddCon from './TablePages/Concesionario/AddCon'
import AddEst from './TablePages/Estados/AddEst'
import EditEst from './TablePages/Estados/EditEst'
import AddCiudad from './TablePages/Ciudades/AddCiudad'
import EditCiudad from './TablePages/Ciudades/EditCiudad'
import AddModelosPosee from './TablePages/Modelos que posee/AddModelosPosee'
import AddTrabajador from './TablePages/Trabajadores/AddTrabajador'
import EditTrabajador from './TablePages/Trabajadores/EditTrabajador'
import AddEspec from './TablePages/Especializaciones/AddEspec'
import AddEncargado from './TablePages/Encargados/AddEncarg'
import EditEncargado from './TablePages/Encargados/EditEncarg'
import AddServicio from './TablePages/Servicios/AddServicio'
import EditServicio from './TablePages/Servicios/EditServicio'
import AddActividad from './TablePages/Actividades/AddActividad'
import EditActividad from './TablePages/Actividades/EditActividad'
import AddDescuento from './TablePages/Descuentos/AddDescuento'
import EditDescuento from './TablePages/Descuentos/EditDescuento'
import AddOrdenSer from './TablePages/Orden de Servicio/AddOrdenSer'
import EditOrdenSer from './TablePages/Orden de Servicio/EditOrdenSer'
import AddDetalleSer from './TablePages/Detalles Servicio/AddDetalleSer'
import EditDetalleSer from './TablePages/Detalles Servicio/EditDetalleSer'
import AddProductoUt from './TablePages/ProductosUtilizados/AddProductoUt'
import EditProductoUt from './TablePages/ProductosUtilizados/EditProductoUt'
import AddRes from './TablePages/Reservas/AddRes'
import EditRes from './TablePages/Reservas/EditRes'
import AddCli from './TablePages/Clientes/AddCli'
import EditCli from './TablePages/Clientes/EditCli'
import AddVeh from './TablePages/Vehiculos/AddVeh'
import EditVeh from './TablePages/Vehiculos/EditVeh'
import AddMan from './TablePages/Mantenimientos/AddMan'
import AddModelo from './TablePages/Modelo/AddModelo'
import EditModelo from './TablePages/Modelo/EditModelo'
import AddManRec from './TablePages/MantenimientoRecomendado/AddManReco'
import EditPro from './TablePages/Producto/EditPro'
import AddPro from './TablePages/Producto/AddPro'
import EditFamPro from './TablePages/FamiliaProductos/EditFamPro'
import AddFamPro from './TablePages/FamiliaProductos/AddFamPro'
import EditFactu from './TablePages/Facturas/EditFactu'
import AddFactu from './TablePages/Facturas/AddFactu'
import AddPagos from './TablePages/Pagos/AddPagos'
import EditPagos from './TablePages/Pagos/EditPagos'
import AddEspeActi from './TablePages/EspecificacionesActividades/AddEspeActi'
import Reportes from './TablePages/Reportes'
import ModelosMasAten from './TablePages/Reportes/ModelosMasAten'
import ServiciosPersonal from './TablePages/Reportes/ServiciosPersonal'
import ClientesFrecuentes from './TablePages/Reportes/ClientesFrecuentes'
import VentasXProducto from './TablePages/Reportes/VentasXProducto'
import SolicitudServ from './TablePages/Reportes/SolicitudServ'
import ServXVeh from './TablePages/Reportes/ServXVeh'
import CompAgencia from './TablePages/Reportes/CompAgencia'
import ResNoUsadas from './TablePages/Reportes/ResNoUsadas'
import FacturasCliente from './TablePages/Reportes/FacturasCliente'
import MantModelo from './TablePages/Reportes/MantModelo'
import FilterClienFre from './TablePages/Reportes/Filtros/FilterClienFre'
import FilterCompAg from './TablePages/Reportes/Filtros/FilterCompAg'
import FilterFacturaC from './TablePages/Reportes/Filtros/FilterFacturaC'
import FilterHistor from './TablePages/Reportes/Filtros/FilterHistor'
import FilterMantMod from './TablePages/Reportes/Filtros/FilterMantMod'
import FilterModAten from './TablePages/Reportes/Filtros/FilterModAten'

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ backgroundColor: '#E9E9E9', height: '100%', width: '100%' }}
      >
        <div className='flex h-screen'>
          <div style={{ boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.5)' }}>
            <SideBar2 />
          </div>
          <div className='flex-grow flex items-center justify-center overflow-auto'>
            <Routes>
              <Route exact path='/' element={<Concesionarios />} />
              <Route path='/Concesionarios' element={<Concesionarios />} />
              <Route path='/Estados' element={<Estados />} />
              <Route path='/Ciudades' element={<Ciudades />} />
              <Route path='/ModelosPosee' element={<ModelosPosee />} />
              <Route path='/Trabajador' element={<Trabajador />} />
              <Route path='/Encargado' element={<Encargado />} />
              <Route
                path='/Especializaciones'
                element={<Especializaciones />}
              />
              <Route path='/Servicios' element={<Servicios />} />
              <Route path='/Actividades' element={<Actividades />} />
              <Route path='/Descuentos' element={<Descuentos />} />
              <Route path='/OrdenesServicio' element={<OrdenesServicio />} />
              <Route path='/DetallesServicio' element={<DetallesServicio />} />
              <Route
                path='/ProductosUtilizados'
                element={<ProductosUtilizados />}
              />
              <Route
                path='/EspecificacionesActividades'
                element={<EspecificacionesActividades />}
              />
              <Route path='/Modelos' element={<Modelos />} />
              <Route
                path='/MantenimientosRecomendados'
                element={<MantenimientosRecomendados />}
              />
              <Route path='/Vehiculos' element={<Vehiculos />} />
              <Route path='/Mantenimientos' element={<Mantenimientos />} />
              <Route path='/Clientes' element={<Clientes />} />
              <Route path='/Reservas' element={<Reservas />} />
              <Route path='/Productos' element={<Productos />} />
              <Route path='/FamiliaProductos' element={<FamiliaProductos />} />
              <Route path='/Facturas' element={<Facturas />} />
              <Route path='/Pagos' element={<Pagos />} />
              <Route path='/EditCon/:id' element={<EditCon />} />
              <Route path='/AddCon' element={<AddCon />} />
              <Route path='/AddEst' element={<AddEst />} />
              <Route path='/EditEst/:id' element={<EditEst />} />
              <Route path='/AddCiudad' element={<AddCiudad />} />
              <Route path='/EditCiudad/:cod/:num' element={<EditCiudad />} />
              <Route path='/AddModelosPosee' element={<AddModelosPosee />} />
              <Route path='/AddTrabajador' element={<AddTrabajador />} />
              <Route path='/EditTrabajador/:id' element={<EditTrabajador />} />
              <Route path='/AddEspec' element={<AddEspec />} />
              <Route path='/AddEncarg' element={<AddEncargado />} />
              <Route path='/EditEncarg/:id' element={<EditEncargado />} />
              <Route path='/AddServicio' element={<AddServicio />} />
              <Route path='/EditServicio/:cod' element={<EditServicio />} />
              <Route path='/AddActividad' element={<AddActividad />} />
              <Route
                path='/EditActividad/:cod/:num'
                element={<EditActividad />}
              />
              <Route path='/AddDescuento' element={<AddDescuento />} />
              <Route
                path='/EditDescuento/:porcentaje'
                element={<EditDescuento />}
              />
              <Route path='/AddOrdenSer' element={<AddOrdenSer />} />
              <Route path='/EditOrdenSer/:cod' element={<EditOrdenSer />} />
              <Route path='/AddDetalleSer' element={<AddDetalleSer />} />
              <Route
                path='/EditDetalleSer/:num/:cod'
                element={<EditDetalleSer />}
              />
              <Route path='/AddProductoUt' element={<AddProductoUt />} />
              <Route path='/EditProductoUt' element={<EditProductoUt />} />
              <Route path='/EditRes/:cod' element={<EditRes />} />
              <Route path='/AddRes' element={<AddRes />} />
              <Route path='/EditCli/:id' element={<EditCli />} />
              <Route path='/AddCli' element={<AddCli />} />
              <Route path='/EditVeh/:cod' element={<EditVeh />} />
              <Route path='/AddVeh' element={<AddVeh />} />
              <Route path='/AddMan' element={<AddMan />} />
              <Route path='/EditModelo/:cod' element={<EditModelo />} />
              <Route path='/AddModelo' element={<AddModelo />} />
              <Route path='/AddManRec' element={<AddManRec />} />
              <Route path='/EditPro/:cod' element={<EditPro />} />
              <Route path='/AddPro' element={<AddPro />} />
              <Route path='/EditFamPro/:cod' element={<EditFamPro />} />
              <Route path='/AddFamPro' element={<AddFamPro />} />
              <Route path='/EditFactu/:id' element={<EditFactu />} />
              <Route path='/AddFactu' element={<AddFactu />} />
              <Route path='/EditPagos/:cod/:num' element={<EditPagos />} />
              <Route path='/AddPagos' element={<AddPagos />} />
              <Route path='/AddEspeActi' element={<AddEspeActi />} />
              <Route path='/Reportes' element={<Reportes />} />
              <Route path='/ModelosMasAten' element={<ModelosMasAten/>} />
              <Route path='/ServiciosPersonal' element={<ServiciosPersonal/>} />
              <Route path='/ClientesFrecuentes' element={<ClientesFrecuentes/>} />
              <Route path='/VentasXProducto' element={<VentasXProducto/>} />
              <Route path='/SolicitudServ' element={<SolicitudServ/>} />
              <Route path='/ServXVeh' element={<ServXVeh/>} />
              <Route path='/CompAgencia' element={<CompAgencia/>} />
              <Route path='/ResNoUsadas' element={<ResNoUsadas/>} />
              <Route path='/FacturasCliente' element={<FacturasCliente/>} />
              <Route path='/MantModelo' element={<MantModelo/>} />
              <Route path='/FilterClienFre' element={<FilterClienFre/>} />
              <Route path='/FilterCompAg' element={<FilterCompAg/>} />
              <Route path='/FilterFacturaC' element={<FilterFacturaC/>} />
              <Route path='/FilterHistor' element={<FilterHistor/>} />
              <Route path='/FilterMantMod' element={<FilterMantMod/>} />
              <Route path='/FilterModAten' element={<FilterModAten/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
