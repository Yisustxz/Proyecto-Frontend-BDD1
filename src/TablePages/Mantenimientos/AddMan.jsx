import React, { useState } from "react";
import FondoArbol from "../../Image/fondoarbol.jpg";
import { useNavigate } from "react-router-dom";

export default function AddMan() {
    const [Placa, setPlaca] = useState('');
    const [Codigo, setCodigo] = useState('');
    const [NumConsecutivo, setNumconsecutivo] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí se envían los datos
        navigate('/Mantenimientos');
      };

    return (
        <div>
            <img src={FondoArbol} alt="fondoarbol" style={{ height: '80vh', width: '40vw', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", position: 'relative', zIndex: '1' }} />
            <div style={{ position: 'absolute', top: '50vh', left: '59.2vw', backgroundColor: 'white', width: '35vw', minHeight: '70vh', borderRadius: '10px', transform: 'translate(-50%, -50%', color: '#fff', zIndex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ color: '#000', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1vh', fontWeight: 'bold', fontSize: '28px' }}>Mantenimientos</h1>
                <form style={{ color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '9.5vw', marginTop: '3vh', fontWeight: 'bold' }} onSubmit={handleSubmit}>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '5vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '18px', marginBottom: '4px' }}>Placa</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Placa} onChange={(event) => setPlaca(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '8vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '18px', marginBottom: '4px' }}>Codigo</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Codigo} onChange={(event) => setCodigo(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '14vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '18px', marginBottom: '4px' }}>NumConsecutivo</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={NumConsecutivo} onChange={(event) => setNumconsecutivo(event.target.value)}/>
                    </label>
                    <button type="button" onClick={handleSubmit} style={{ width: '9vw', height: '5vh', borderRadius: '10px', backgroundColor: '#478F4D', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '3.5vw', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)", fontWeight: 'bold', fontSize: '20px' }}>Agregar</button>
                </form>
            </div>
        </div>
    );
}