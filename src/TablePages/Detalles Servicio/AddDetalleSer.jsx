import React, { useState } from "react";
import FondoArbol from "../../Image/fondoarbol.jpg";
import { useNavigate } from "react-router-dom";

export default function AddDetalleSer() {
    const [numUnico, setNumUnico] = useState('');
    const [cant, setCant] = useState('');
    const [costo, setCosto] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí se envían los datos
        navigate('/DetallesServicio');
      };

    return (
        <div>
            <img src={FondoArbol} alt="fondoarbol" style={{ height: '70vh', width: '40vw', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            <div style={{  position: 'absolute', top: '50vh', left: '59%', backgroundColor: 'white', width: '35vw', minHeight: '40vh', borderRadius: '10px', transform: 'translate(-50%, -50%', color: '#fff', zIndex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ color: '#000', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1vh', fontWeight: 'bold', fontSize: '28px' }}>Detalles de Servicio</h1>
                <form style={{ color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'auto', marginLeft: '9.5vw', marginTop: '3vh', fontWeight: 'bold', minHeight: '50vh' }} onSubmit={handleSubmit}>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '7vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '18px', marginBottom: '4px' }}>NumUnico</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={numUnico} onChange={(event) => setNumUnico(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '6vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '18px', marginBottom: '4px' }}>Cant</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={cant} onChange={(event) => setCant(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '6vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '18px', marginBottom: '4px' }}>Costo</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={costo} onChange={(event) => setCosto(event.target.value)}/>
                    </label>
                    <button type="button" onClick={handleSubmit} style={{ width: '9vw', height: '5vh', borderRadius: '10px', backgroundColor: '#478F4D', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '3.5vw', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)", fontWeight: 'bold', fontSize: '20px' }}>Agregar</button>
                </form>
            </div>
        </div>
    );
}