import React, { useState } from 'react'
import FondoArbol from '../../Image/fondoarbol.jpg'
import { useNavigate } from 'react-router-dom'
import { createPago } from '../../services/pago.services'
import { toast } from 'react-toastify'

export default function AddPagos() {
  const navigate = useNavigate()
  const [pago, setPago] = useState({
    num_factura: '',
    modalidad: '',
    fecha_pago: '',
    monto: '',
    num_tarjeta: '',
    num_banco: ''
  })

  const [modalidad, setModalidad] = useState('')

  const handleChange = (e) => {
    setPago({
      ...pago,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeModalidad = (e) => {
    setPago({
      ...pago,
      [e.target.name]: e.target.value
    })
    setModalidad(e.target.value)
  }

  const handleChangeNumber = (e) => {
    setPago({
      ...pago,
      [e.target.name]: +e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await createPago(pago)
      navigate('/Pagos')
      toast.success(response.data)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div>
      <img
        src={FondoArbol}
        alt='fondoarbol'
        style={{
          height: '90vh',
          width: '40vw',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          zIndex: '1'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50vh',
          left: '59.4%',
          backgroundColor: 'white',
          width: '35vw',
          maxHeight: '80vh',
          borderRadius: '10px',
          transform: 'translate(-50%, -50%',
          color: '#fff',
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'scroll',
          overflowX: 'hidden'
        }}
      >
        <h1
          style={{
            color: '#000',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '19vh',
            fontWeight: 'bold',
            fontSize: '30px'
          }}
        >
          Pagos
        </h1>
        <form
          style={{
            color: '#000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '9.5vw',
            marginTop: '3vh',
            fontWeight: 'bold',
            paddingTop: '1vh',
            paddingBottom: '5vh'
          }}
          onSubmit={handleSubmit}
        >
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '10vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              Num Factura
            </h2>
            <input
              name='num_factura'
              type='text'
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
              value={pago.num_factura}
              onChange={handleChange}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '8vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              Modalidad
            </h2>
            <select
              name='modalidad'
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
              onChange={handleChangeModalidad}
              value={pago.modalidad}
            >
              <option value='EB'>Efectivo en Bolívares</option>
              <option value='ED'>Efectivo en Dólares</option>
              <option value='T'>Transferencia</option>
              <option value='TD'>Tarjeta de Debito</option>
              <option value='TC'>Tarjeta de Crédito</option>
            </select>
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '8vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              Fecha
            </h2>
            <input
              name='fecha_pago'
              type='date'
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
              value={pago.fecha_pago}
              onChange={handleChange}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '8vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              Monto
            </h2>
            <input
              name='monto'
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
              value={pago.monto}
              onChange={handleChangeNumber}
            />
          </label>
          {(modalidad == 'TC' || modalidad == 'TD') && (
            <label style={{ paddingBottom: '15px' }}>
              {' '}
              <h2
                style={{
                  backgroundColor: '#1D324E',
                  width: '10vw',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '20px',
                  marginBottom: '4px'
                }}
              >
                NumTarjeta
              </h2>
              <input
                name='num_tarjeta'
                type='text'
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
                value={pago.num_tarjeta}
                onChange={handleChange}
              />
            </label>
          )}
          {(modalidad == 'TC' || modalidad == 'TD') && (
            <label style={{ paddingBottom: '15px' }}>
              {' '}
              <h2
                style={{
                  backgroundColor: '#1D324E',
                  width: '10vw',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '20px',
                  marginBottom: '4px'
                }}
              >
                Banco
              </h2>
              <input
                name='num_banco'
                type='text'
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
                value={pago.num_banco}
                onChange={handleChange}
              />
            </label>
          )}
          <button
            type='button'
            onClick={handleSubmit}
            style={{
              width: '9vw',
              height: '7vh',
              borderRadius: '10px',
              backgroundColor: '#478F4D',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '3.5vw',
              cursor: 'pointer',
              boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.2)',
              fontWeight: 'bold',
              fontSize: '20px'
            }}
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  )
}
