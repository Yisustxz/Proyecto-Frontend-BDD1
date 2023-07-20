import { AiOutlineFile } from 'react-icons/ai'
import FacturasCRows from './FacturasCRows';

export default function FacturasCliente() {
    return (
      <div>
      <div
        style={{
          height: '60vh',
          width: '70vw',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#478F4D',
            width: '90px',
            height: '90px',
            marginTop: '-6vh',
            borderRadius: '7px',
            marginLeft: '-55vw',
            boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
 <AiOutlineFile color={'#fff'} size={60} style={{ alignSelf: 'center' }} />  
        </div>
        <h1
          style={{
            marginLeft: '-32vw',
            marginTop: '1vh',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
        >
          Facturas por Cliente
        </h1>
        <div
          style={{
            width: '64vw',
            height: '4vh',
            marginTop: '2vh',
            borderBottomColor: '#737070',
            borderWidth: '2px',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <div
            style={{
              width: '57vw',
              height: '4vh',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRightColor: '#C1BFBF',
              borderLeft: 'none',
              borderTop: 'none',
              borderBottom: 'none',
              borderWidth: '2px'
            }}
          >
            <div
              style={{
                width: '11vw',
                height: '4vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              NombreCliente
            </div>
            <div
              style={{
                width: '11vw',
                height: '4vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              NumFactura
            </div>
            <div
              style={{
                width: '11vw',
                height: '4vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              FechaFactura
            </div>

          </div>
        </div>
             <FacturasCRows/> 
      </div>
    </div>
    );
  }