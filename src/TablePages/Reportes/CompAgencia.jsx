import MayVen from '../../Image/mayVen.png'
import MenVen from '../../Image/menVen.png'
import SelloRechazado from '../../Image/selloRechazado.png'

export default function CompAgencia() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '28px', backgroundColor: '#478F4D', borderRadius: '10px' }}>Facturación de Agencias por Servicios</h1>
      <div
        style={{
          height: '60vh',
          width: '70vw',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <div style={{
          backgroundColor: 'red', height: '55vh', width: '32vw', backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Mayor facturación por servicios</h1>
          <div style={{ height: '25vh' }}>
            <img src={MayVen} style={{ height: '25vh', width: 'auto' }} />
          </div>
          <div style={{ marginLeft: '7vw' }}>
            <div style={{ height: '4vh', width: '32vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '2vh' }}>
              <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Cod_Concesionario</h2>
              <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '8vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>88888</h2>
            </div>
            <div style={{ height: '4vh', width: '32vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '2vh' }}>
              <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Nombre</h2>
              <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '8vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>SueltenmeElBrazo</h2>
            </div>
            <div style={{ height: '4vh', width: '32vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '2vh' }}>
              <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Facturación por servicios</h2>
              <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '8vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>1500</h2>
            </div>
          </div>
        </div>
        <div style={{
          backgroundColor: 'red', height: '55vh', width: '32vw', backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Menor facturación por servicios</h1>
          <div style={{ height: '25vh' }}>
            <img src={MenVen} style={{ height: '25vh', width: 'auto' }} />
          </div>
          <div style={{ marginLeft: '7vw' }}>
            <div style={{ height: '4vh', width: '32vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '2vh' }}>
              <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Cod_Concesionario</h2>
              <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '8vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>66666</h2>
            </div>
            <div style={{ height: '4vh', width: '32vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '2vh' }}>
              <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Nombre</h2>
              <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '8vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>Encargado lpm</h2>
            </div>
            <div style={{ height: '4vh', width: '32vw', display: 'flex', flexDirection: 'row', paddingLeft: '1vw', alignItems: 'center', marginTop: '2vh' }}>
              <h2 style={{ textAlign: 'center', backgroundColor: '#1D324E', width: '12vw', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>Facturación por servicios</h2>
              <h2 style={{ textAlign: 'left', marginLeft: '1vw', width: '8vw', borderWidth: '2px', borderColor: '#D7D5D5', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>20</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}