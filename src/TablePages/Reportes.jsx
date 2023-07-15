import FondoArbol from "../Image/fondoarbol.jpg";
import { AiOutlineCar } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BsArchiveFill } from "react-icons/bs";
import { MdCarRepair } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { GiCarWheel } from "react-icons/gi";
import { BiEdit } from "react-icons/bi";
import { AiOutlineFile } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Reportes() {
    return (
        <div style={{ height: '100%' }}>
            <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginTop: '10px', width: '90vw', backgroundColor: '#478F4D', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Reportes</h1>
            <div style={{ height: '30vh', width: '90vw', marginBottom: '4vh', marginTop: '8vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Link to="/ModelosMasAten">
                    <div style={{ height: '30vh', width: '22vw', backgroundColor: 'white', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", marginLeft: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                        <img src={FondoArbol} alt="fondoarbol" style={{ height: '18vh', width: '18vh', borderRadius: '10px', marginTop: '-4vh', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)" }} />
                        <AiOutlineCar color={"#fff"} size={90} style={{ marginTop: '-14vh' }} />
                        <h1 style={{ marginTop: '6vh', width: '18vw', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>Modelos de vehículos más atendidos</h1>
                    </div>
                </Link>
                <Link to="/ServiciosPersonal">
                    <div style={{ height: '30vh', width: '22vw', backgroundColor: 'white', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                        <img src={FondoArbol} alt="fondoarbol" style={{ height: '18vh', width: '18vh', borderRadius: '10px', marginTop: '-4vh', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)" }} />
                        <FaUserFriends color={"#fff"} size={90} style={{ marginTop: '-14vh' }} />
                        <h1 style={{ marginTop: '6vh', width: '18vw', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>Servicios por personal</h1>
                    </div>
                </Link>
                <Link to="/ClientesFrecuentes">
                    <div style={{ height: '30vh', width: '22vw', backgroundColor: 'white', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '40px', cursor: 'pointer' }}>
                        <img src={FondoArbol} alt="fondoarbol" style={{ height: '18vh', width: '18vh', borderRadius: '10px', marginTop: '-4vh', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)" }} />
                        <FaUserAlt color={"#fff"} size={80} style={{ marginTop: '-14vh' }} />
                        <h1 style={{ marginTop: '7vh', width: '18vw', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>Clientes frecuentes</h1>
                    </div>
                </Link>
            </div>
            <div style={{ height: '30vh', width: '90vw', marginBottom: '4vh', marginTop: '8vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Link to="/VentasXProducto">
                    <div style={{ height: '30vh', width: '22vw', backgroundColor: 'white', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", marginLeft: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                        <img src={FondoArbol} alt="fondoarbol" style={{ height: '18vh', width: '18vh', borderRadius: '10px', marginTop: '-4vh', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)" }} />
                        <BsArchiveFill color={"#fff"} size={80} style={{ marginTop: '-14vh' }} />
                        <h1 style={{ marginTop: '7vh', width: '18vw', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>Ventas por producto</h1>
                    </div>
                </Link>
                <Link to="/SolicitudServ">
                    <div style={{ height: '30vh', width: '22vw', backgroundColor: 'white', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                        <img src={FondoArbol} alt="fondoarbol" style={{ height: '18vh', width: '18vh', borderRadius: '10px', marginTop: '-4vh', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)" }} />
                        <MdCarRepair color={"#fff"} size={90} style={{ marginTop: '-14vh' }} />
                        <h1 style={{ marginTop: '6vh', width: '18vw', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>Solicitudes de servicios</h1>
                    </div>
                </Link>
                <Link to="/ServXVeh">
                    <div style={{ height: '30vh', width: '22vw', backgroundColor: 'white', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '40px', cursor: 'pointer' }}>
                        <img src={FondoArbol} alt="fondoarbol" style={{ height: '18vh', width: '18vh', borderRadius: '10px', marginTop: '-4vh', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)" }} />
                        <AiFillCar color={"#fff"} size={90} style={{ marginTop: '-14vh' }} />
                        <h1 style={{ marginTop: '6vh', width: '18vw', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>Histórico servicios por vehículo</h1>
                    </div>
                </Link>
            </div>

            <div style={{ height: '30vh', width: '90vw', marginBottom: '4vh', marginTop: '8vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Link to="/CompAgencia">
                    <div style={{ height: '30vh', width: '22vw', backgroundColor: 'white', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", marginLeft: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                        <img src={FondoArbol} alt="fondoarbol" style={{ height: '18vh', width: '18vh', borderRadius: '10px', marginTop: '-4vh', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)" }} />
                        <GiCarWheel color={"#fff"} size={90} style={{ marginTop: '-14vh' }} />
                        <h1 style={{ marginTop: '6vh', width: '18vw', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>Comparación agencias</h1>
                    </div>
                </Link>
                <Link to="/ResNoUsadas">
                <div style={{ height: '30vh', width: '22vw', backgroundColor: 'white', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                    <img src={FondoArbol} alt="fondoarbol" style={{ height: '18vh', width: '18vh', borderRadius: '10px', marginTop: '-4vh', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)" }} />
                    <BiEdit color={"#fff"} size={90} style={{ marginTop: '-14vh' }} />
                    <h1 style={{ marginTop: '6vh', width: '18vw', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>Reservas no usadas</h1>
                </div>
                </Link>
                <Link to="/FacturasCliente">
                <div style={{ height: '30vh', width: '22vw', backgroundColor: 'white', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '40px', cursor: 'pointer' }}>
                    <img src={FondoArbol} alt="fondoarbol" style={{ height: '18vh', width: '18vh', borderRadius: '10px', marginTop: '-4vh', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)" }} />
                    <AiOutlineFile color={"#fff"} size={90} style={{ marginTop: '-14vh' }} />
                    <h1 style={{ marginTop: '6vh', width: '18vw', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>Facturas por clientes</h1>
                </div>
                </Link>
            </div>
            <div style={{ height: '30vh', width: '90vw', marginBottom: '4vh', marginTop: '8vh', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Link to="/MantModelo">
                <div style={{ height: '30vh', width: '22vw', backgroundColor: 'white', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                    <img src={FondoArbol} alt="fondoarbol" style={{ height: '18vh', width: '18vh', borderRadius: '10px', marginTop: '-4vh', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)" }} />
                    <AiOutlineCar color={"#fff"} size={90} style={{ marginTop: '-14vh' }} />
                    <h1 style={{ marginTop: '6vh', width: '18vw', textAlign: 'center', fontSize: '26px', fontWeight: 'bold' }}>Mantenimiento por modelo</h1>
                </div>
                </Link>
            </div>
        </div>
    );
}