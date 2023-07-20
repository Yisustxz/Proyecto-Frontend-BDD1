import React, { useState } from 'react'
import FondoArbol from '../../Image/fondoarbol.jpg'
import { useNavigate } from 'react-router-dom'
import { createFactura } from '../../services/factura.services'
import { toast } from 'react-toastify'

export default function AddFactu() {
  const navigate = useNavigate()
  const [factura, setFactura] = useState({
    num_factura: '',
    costo_mano_obra: 0,
    monto_total: 0,
    fecha_factura: '',
    num_unico: ''
  })

  const handleChange = (e) => {
    setFactura({
      ...factura,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeNumber = (e) => {
    setFactura({
      ...factura,
      [e.target.name]: +e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await createFactura(factura)
      navigate('/Facturas')
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
          height: '83vh',
          borderRadius: '10px',
          transform: 'translate(-50%, -50%',
          color: '#fff',
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <h1
          style={{
            color: '#000',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '1vh',
            fontWeight: 'bold',
            fontSize: '30px'
          }}
        >
          Factura
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
              NumFactura
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
              value={factura.num_factura}
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
              Fecha
            </h2>
            <input
              name='fecha_factura'
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
              value={factura.fecha_factura}
              onChange={handleChange}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '15vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              NumUnico_OrdenServicio
            </h2>
            <input
              name='num_unico'
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
              value={factura.num_unico}
              onChange={handleChangeNumber}
            />
          </label>
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
