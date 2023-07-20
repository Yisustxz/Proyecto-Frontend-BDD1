import FondoArbol from '../../../Image/fondoarbol.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";

export default function FilterModAten() {
    return (
        <div>
      <img
        src={FondoArbol}
        alt='fondoarbol'
        style={{
          height: '60vh',
          width: '40vw',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          zIndex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50vh',
          left: '59.4%',
          backgroundColor: 'white',
          width: '35vw',
          minHeight: '40vh',
          borderRadius: '10px',
          transform: 'translate(-50%, -50%',
          color: '#fff',
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <AiOutlineSearch color={'black'}
              size={40}
              style={{ marginLeft: '20vh', position: 'absolute', marginTop: '-40vh' }}/>
        <h1
          style={{
            color: '#000',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '3vh',
            fontWeight: 'bold',
            fontSize: '28px'
          }}
        >
          Buscar
        </h1>
        <form
          style={{
            color: '#000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'auto',
            marginTop: '3vh',
            fontSize: '24px',
            fontWeight: 'bold',
            minHeight: '40vh'
          }}

        >
          <div style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
            <label style={{ paddingBottom: '2px', marginRight: '10px' }}>
              {' '}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '18px',
                  marginBottom: '4px'
                }}
              >
                <h2
                  style={{backgroundColor: '#1D324E', borderRadius: '10px', padding: '3px'}}
                >
                  Fecha inicio
                </h2>
              </div>
              <input
                name='cantidad'
                type='number'
                style={{
                  borderWidth: '2px',
                  borderColor: '#C1BFBF',
                  borderRadius: '10px',
                  marginBottom: '15px',
                  paddingLeft: '10px',
                  fontSize: '20px',
                  fontWeight: 'normal',
                  width: '17vw'
                }}

              />
            </label>
            <label style={{ paddingBottom: '2px' }}>
              {' '}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '18px',
                  marginBottom: '4px'
                }}
              >
                <h2
                  style={{backgroundColor: '#1D324E', borderRadius: '10px', padding: '3px'}}
                >
                  Fecha Fin
                </h2>
              </div>
              <input
                name='cantidad'
                type='number'
                style={{
                  borderWidth: '2px',
                  borderColor: '#C1BFBF',
                  borderRadius: '10px',
                  marginBottom: '15px',
                  paddingLeft: '10px',
                  fontSize: '20px',
                  fontWeight: 'normal',
                  width: '17vw'
                }}

              />
            </label>
          </div>
          <div style={{borderWidth: '2px', margin: '2px', marginTop: '0'}}/>
          <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: "10px"}}>
            <label style={{ paddingBottom: '2px' }}>
              {' '}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '18px',
                  marginBottom: '4px'
                }}
              >
                <h2
                  style={{backgroundColor: '#1D324E', borderRadius: '10px', padding: '3px'}}
                >
                  Tipo de servicio
                </h2>
              </div>
              <input
                name='costo'
                type='number'
                style={{
                  borderWidth: '2px',
                  borderColor: '#C1BFBF',
                  borderRadius: '10px',
                  marginBottom: '15px',
                  paddingLeft: '10px',
                  fontSize: '20px',
                  fontWeight: 'normal',
                  width: '17vw'
                }}

              />
            </label>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Link to='/ModelosMasAten'>
              <button
                type='button'
                style={{
                    width: '8vw',
                    height: '5vh',
                    borderRadius: '10px',
                    backgroundColor: '#478F4D',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.2)',
                    fontWeight: 'bold',
                    fontSize: '20px'
                }}
              >
                Filtrar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
    );
}