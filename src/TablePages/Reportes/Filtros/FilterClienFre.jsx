import FondoArbol from '../../../Image/fondoarbol.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'

export default function FilterClienFre() {
  const [filtroCliente, setFiltroCliente] = useState({
    fecha_inicio: '',
    fecha_final: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFiltroCliente({
      ...filtroCliente,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('hola', event)
      navigate('/ClientesFrecuentes', { state: filtroCliente })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <img
        src={FondoArbol}
        alt='fondoarbol'
        style={{
          height: '45vh',
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
          height: '35vh',
          borderRadius: '10px',
          transform: 'translate(-50%, -50%',
          color: '#fff',
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <AiOutlineSearch
          color={'black'}
          size={40}
          style={{
            marginLeft: '18vh',
            position: 'absolute',
            marginTop: '-25vh'
          }}
        />
        <h1
          style={{
            color: '#000',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '9vh',
            fontWeight: 'bold',
            fontSize: '28px'
          }}
        >
          Filtrar por
        </h1>
        <form
          style={{
            color: '#000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '6vw',
            fontSize: '24px',
            fontWeight: 'bold',
            minHeight: '40vh',
            marginTop: '-6vh'
          }}
          onSubmit={handleSubmit}
        >
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '6vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              Rango
            </h2>
            <div
              style={{
                width: '25vw',
                height: '7vh',
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '2vh'
              }}
            >
              <div
                style={{
                  width: '12vw',
                  height: '10vh',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h1 style={{ fontWeight: 'normal', fontSize: '20px' }}>
                  Fecha inicio
                </h1>
                <input
                  name='fecha_inicio'
                  type='date'
                  style={{
                    borderWidth: '2px',
                    borderColor: '#C1BFBF',
                    borderRadius: '10px',
                    marginBottom: '15px',
                    paddingLeft: '10px',
                    fontSize: '20px',
                    fontWeight: 'normal',
                    width: '10vw',
                    height: '7vh'
                  }}
                  value={filtroCliente.fecha_inicio}
                  onChange={handleChange}
                />
              </div>
              <div
                style={{
                  width: '12vw',
                  height: '10vh',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h1 style={{ fontWeight: 'normal', fontSize: '20px' }}>
                  Fecha final
                </h1>
                <input
                  name='fecha_final'
                  type='date'
                  style={{
                    borderWidth: '2px',
                    borderColor: '#C1BFBF',
                    borderRadius: '10px',
                    marginBottom: '15px',
                    paddingLeft: '10px',
                    fontSize: '20px',
                    fontWeight: 'normal',
                    width: '10vw',
                    height: '7vh'
                  }}
                  value={filtroCliente.fecha_final}
                  onChange={handleChange}
                />
              </div>
            </div>
          </label>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start'
            }}
          >
            <button
              type='button'
              onClick={handleSubmit}
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
          </div>
        </form>
      </div>
    </div>
  )
}
