import React, { useState } from "react";
import FondoArbol from "../../Image/fondoarbol.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditManReco() {
    const [CodigoModelo, setCodigoModelo] = useState('');
    const [Codigo, setCodigo] = useState('');
    const [Kilometraje, setKilometraje] = useState('');
    const [TiempoUso, setTiempoUso] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí se envían los datos
        navigate('/MantenimientosRecomendados');
      };

    return (
        <div>
            <img src={FondoArbol} alt="fondoarbol" style={{ height: '90vh', width: '40vw', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", position: 'relative', zIndex: '1' }} />
            <div style={{ position: 'absolute', top: '50vh', left: '59.2vw', backgroundColor: 'white', width: '35vw', minHeight: '80vh', borderRadius: '10px', transform: 'translate(-50%, -50%', color: '#fff', zIndex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ color: '#000', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1vh', fontWeight: 'bold', fontSize: '28px' }}>Mantenimientos Recomendado</h1>
                <form style={{ color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '9.5vw', marginTop: '3vh', fontWeight: 'bold' }} onSubmit={handleSubmit}>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '10vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '18px', marginBottom: '4px' }}>Codigo Modelo</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={CodigoModelo} onChange={(event) => setCodigoModelo(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '8vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '18px', marginBottom: '4px' }}>Codigo</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Codigo} onChange={(event) => setCodigo(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '8vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '18px', marginBottom: '4px' }}>Kilometraje</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Kilometraje} onChange={(event) => setKilometraje(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '14vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '18px', marginBottom: '4px' }}>Tiempo de Uso</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={TiempoUso} onChange={(event) => setTiempoUso(event.target.value)}/>
                    </label>
                    <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'flex-start'}}> 
                    <button type="button" onClick={handleSubmit} style={{ width: '8vw', height: '5vh', borderRadius: '10px', backgroundColor: '#478F4D', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)", fontWeight: 'bold', fontSize: '20px' }}>Editar</button>
                    <Link to= "/MantenimientosRecomendados">
                    <button type="button" style={{ width: '8vw', height: '5vh', borderRadius: '10px', borderColor: '#478F4D', borderWidth: '2px', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '1vw', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)", fontWeight: 'bold', fontSize: '20px' }}>Cancelar</button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}