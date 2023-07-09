import React, { useState } from "react";
import FondoArbol from "../../Image/fondoarbol.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditPagos() {
    const [Modalidad, setModalidad] = useState('');
    const [Fecha, setFecha] = useState('');
    const [Monto, setMonto] = useState('');
    const [NumTarjeta, setNumTarjeta] = useState('');
    const [Banco, setBanco] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí se envían los datos
        navigate('/Pagos');
      };

    return (
        <div>
            <img src={FondoArbol} alt="fondoarbol" style={{ height: '90vh', width: '40vw', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", position: 'relative', zIndex: '1' }} />
            <div style={{ position: 'absolute', top: '50vh', left: '58vw', backgroundColor: 'white', width: '35vw', maxHeight: '80vh', borderRadius: '10px', transform: 'translate(-50%, -50%', color: '#fff', zIndex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: "scroll", overflowX: "hidden" }}>
                <h1 style={{ color: '#000', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '6vh',  fontWeight: 'bold', fontSize: '30px' }}>Pagos</h1>
                <form style={{ color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '9.5vw', marginTop: '3vh', fontWeight: 'bold' }} onSubmit={handleSubmit}>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '8vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>Modalidad</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Modalidad} onChange={(event) => setModalidad(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '8vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>Fecha</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Fecha} onChange={(event) => setFecha(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '8vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>Monto</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Monto} onChange={(event) => setMonto(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '10vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>NumTarjeta</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={NumTarjeta} onChange={(event) => setNumTarjeta(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '10vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>Banco</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Banco} onChange={(event) => setBanco(event.target.value)}/>
                    </label>
                    <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'flex-start'}}> 
                    <button type="button" onClick={handleSubmit} style={{ width: '8vw', height: '5vh', borderRadius: '10px', backgroundColor: '#478F4D', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)", fontWeight: 'bold', fontSize: '20px' }}>Editar</button>
                    <Link to= "/Pagos">
                        <button type="button" style={{ width: '8vw', height: '5vh', borderRadius: '10px', borderColor: '#478F4D', borderWidth: '2px', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '1vw', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)", fontWeight: 'bold', fontSize: '20px' }}>Cancelar</button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}