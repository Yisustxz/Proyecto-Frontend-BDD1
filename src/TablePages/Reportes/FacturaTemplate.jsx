
import { useState } from 'react'
import Sello from '../../Image/sello.png'

export default function FacturaTemplate() {
    const [productos, setProductos] = useState(["Pintura", "Esmalte", "Aceite", "Gas"])
    const [cantidades, setCantidad] = useState([1, 2, 3, 4])
    const [costos, setCostos] = useState([10, 5, 3, 6])

    return (
        <div>
            <div
                style={{
                    height: '80vh',
                    width: '50vw',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    overflow: 'auto'
                }}
            >
                <h1
                    style={{
                        marginTop: '1vh',
                        fontSize: '28px',
                        fontWeight: 'bold',
                    }}
                >
                    Factura
                </h1>
                <div style={{ height: '4vh', width: '50vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center' }}>
                    <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Número de factura</h2>
                    <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '6vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>22222</h2>
                </div>
                <div style={{ height: '4vh', width: '50vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '2vh' }}>
                    <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>CI Cliente</h2>
                    <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '6vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>28534711</h2>
                </div>
                <div style={{ height: '4vh', width: '50vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '2vh' }}>
                    <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Nombre</h2>
                    <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '16vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>Cristina Morales Padron</h2>
                </div>
                <div style={{ height: '4vh', width: '50vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '2vh' }}>
                    <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Fecha</h2>
                    <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '6vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>04/07/2022</h2>
                </div>
                <div style={{ height: '4vh', width: '50vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '2vh' }}>
                    <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Orden de Servicio</h2>
                    <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '6vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>777777</h2>
                </div>
                <div style={{ height: '20vh', width: '50vw', display: 'flex', flexDirection: 'row', overflow: 'auto', overflowX: 'hidden'}}>
                    <div style={{ height: 'auto', width: '15vw', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '4vh', width: '50vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '6vh' }}>
                            <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Productos Utilizados</h2>
                        </div>
                        <div style={{ height: '4vh', width: '50vw', display: 'flex', flexDirection: 'column', paddingLeft: '1vw', marginTop: '1vh' }}>
                            {productos.map((producto) => (
                                <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '12vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>
                                    {producto}
                                </h2>
                            ))}
                        </div>
                    </div>
                    <div style={{ height: 'auto', width: '15vw', display: 'flex', flexDirection: 'column', marginLeft: '1vw' }}>
                        <div style={{ height: '4vh', width: '20vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '6vh' }}>
                            <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Cantidad</h2>
                        </div>
                        <div style={{ height: '4vh', width: '50vw', display: 'flex', flexDirection: 'column', paddingLeft: '1vw', marginTop: '1vh' }}>
                            {cantidades.map((cantidad) => (
                                <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '5vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>
                                    {cantidad}
                                </h2>
                            ))}
                        </div>
                    </div>
                    <div style={{ height: 'auto', width: '20vw', display: 'flex', flexDirection: 'column', marginLeft: '1vw' }}>
                        <div style={{ height: '4vh', width: '20vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '6vh' }}>
                            <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Costo</h2>
                        </div>
                        <div style={{ height: '4vh', width: '50vw', display: 'flex', flexDirection: 'column', paddingLeft: '1vw', marginTop: '1vh' }}>
                            {costos.map((costo) => (
                                <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '5vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>
                                    {costo}$
                                </h2>
                            ))}
                        </div>
                    </div>

                </div>
                <div style={{ height: '4vh', width: '50vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '4vh' }}>
                    <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Costo Mano de Obra</h2>
                    <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '6vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>20$</h2>
                </div>
                <div style={{ height: '4vh', width: '50vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '2vh' }}>
                    <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Monto Total</h2>
                    <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '6vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>100$</h2>
                </div>

            <img src={Sello} style={{height: '120px', alignSelf: 'end', marginRight: '40px', marginBottom: '10px'}}/>
            </div>
        </div>
    );
}

