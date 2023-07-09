import React, { useState } from "react";
import FondoArbol from "../../Image/fondoarbol.jpg";
import { useNavigate } from "react-router-dom";

export default function AddFactu() {
    const [NumFactura, setNumFactura] = useState('');
    const [CostoManoObra, setCostoManoObra] = useState('');
    const [MontoTotal, setMontoTotal] = useState('');
    const [Fecha, setFecha] = useState('');
    const [NumUnico, setNumUnico] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Los valores del formulario son: Numero de Facturaa=${NumFactura}, Costo de mnano de obra=${CostoManoObra}, Monto Total=${MontoTotal}, Fecha=${Fecha}, numero unico de la orden del servicio=${NumUnico}`);
        // Aquí se envían los datos
        navigate('/Facturas');
      };

    return (
        <div>
            <img src={FondoArbol} alt="fondoarbol" style={{ height: '90vh', width: '40vw', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", position: 'relative', zIndex: '1' }} />
            <div style={{ position: 'absolute', top: '50vh', left: '58%', backgroundColor: 'white', width: '35vw', height: '80vh', borderRadius: '10px', transform: 'translate(-50%, -50%', color: '#fff', zIndex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ color: '#000', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1vh', fontSize: '24px', fontWeight: 'bold', fontSize: '30px' }}>Factura</h1>
                <form style={{ color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '9.5vw', marginTop: '3vh', fontSize: '24px', fontWeight: 'bold' }} onSubmit={handleSubmit}>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '5vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>NumFactura</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={NumFactura} onChange={(event) => setNumFactura(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '8vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>Costo Mano de Obra</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={CostoManoObra} onChange={(event) => setCostoManoObra(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '8vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>MontoTotal</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={MontoTotal} onChange={(event) => setMontoTotal(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '14vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>Fecha</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={Fecha} onChange={(event) => setFecha(event.target.value)}/>
                    </label>
                    <label style={{ paddingBottom: '15px' }}> <h2 style={{ backgroundColor: '#1D324E', width: '12vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '10px', color: 'white', fontSize: '20px', marginBottom: '4px' }}>NumUnico</h2>
                        <input type="text" style={{ borderWidth: '2px', borderColor: '#C1BFBF', borderRadius: '10px', marginBottom: '15px', paddingLeft: '10px', fontSize: '20px', fontWeight: 'normal', width: '17vw' }} value={NumUnico} onChange={(event) => setNumUnico(event.target.value)}/>
                    </label>
                    <button type="button" onClick={handleSubmit} style={{ width: '9vw', height: '7vh', borderRadius: '10px', backgroundColor: '#478F4D', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '3.5vw', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)", fontWeight: 'bold', fontSize: '20px' }}>Agregar</button>
                </form>
            </div>
        </div>
    );
}