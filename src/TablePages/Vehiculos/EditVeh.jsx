import React, { useState } from "react";
import FondoArbol from "../../Image/fondoarbol.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditVeh() {
    const [añoVehiculo, setañoVehiculo] = useState('');
    const [NumSerial, setNumSerial] = useState('');
    const [NumMotor, setNumMotor] = useState('');
    const [Color, setColor] = useState('');
    const [FechaVenta, setFechaVenta] = useState('');
    const [ConcesionarioVendedor, setConcesionarioVendedor] = useState('');
    const [Info, setInfo] = useState('');
    const [CodModelo, setCodModelo] = useState('');
    const [Cedula, setCedula] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí se envían los datos
        navigate('/vehiculos');
      };

    return (
        <div>
            <img src={FondoArbol} alt="fondoarbol" style={{ height: '90vh', width: '40vw', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            <div style={{  position: 'absolute', top: '50vh', left: '59.2%', backgroundColor: 'white', width: '35vw', height: '80vh', borderRadius: '10px', transform: 'translate(-50%, -50%', color: '#fff', zIndex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ color: '#000', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1vh',  fontWeight: 'bold', fontSize: '28px' }}>Vehiculo</h1>
                <form style={{ color: '#000', display: 'flex', flexDirection: 'column',  overflow: 'auto', marginLeft: '9.5vw', marginTop: '3vh',  fontWeight: 'bold', height: '70vh' ,  paddingBottom: "5vh" }} onSubmit={handleSubmit}>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '9vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>AñoVehiculo</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={añoVehiculo} onChange={(event) => setañoVehiculo(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '8vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>NumSerial</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={NumSerial} onChange={(event) => setNumSerial(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '9vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>NumMotor</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={NumMotor} onChange={(event) => setNumMotor(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '7vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>Color</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Color} onChange={(event) => setColor(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '9vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>FechaVenta</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={FechaVenta} onChange={(event) => setFechaVenta(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '15vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>ConcesionarioVendedor</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={ConcesionarioVendedor} onChange={(event) => setConcesionarioVendedor(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '11vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>InfoImportante</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Info} onChange={(event) => setInfo(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '10vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>Cod_Modelo</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={CodModelo} onChange={(event) => setCodModelo(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '5vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>CI</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Cedula} onChange={(event) => setCedula(event.target.value)}/>
                    </label>
                    <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'flex-start'}}> 
                    <button type="button" onClick={handleSubmit} style={{ width: '8vw', height: '5vh', borderRadius: '10px', backgroundColor: '#478F4D', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)", fontWeight: 'bold', fontSize: '20px' }}>Editar</button>
                    <Link to= "/Vehiculos">
                    <button type="button" style={{ width: '8vw', height: '5vh', borderRadius: '10px', borderColor: '#478F4D', borderWidth: '2px', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '1vw', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)", fontWeight: 'bold', fontSize: '20px' }}>Cancelar</button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}