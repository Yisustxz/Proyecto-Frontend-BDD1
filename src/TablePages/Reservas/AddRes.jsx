import React, { useState } from 'react'
import FondoArbol from '../../Image/fondoarbol.jpg'
import { useNavigate } from 'react-router-dom'
import { createReserva } from '../../services/reserva.services'
import { toast } from 'react-toastify'

export default function AddRes() {
  const navigate = useNavigate()
  const [reserva, setReserva] = useState({
    cod_reserva: '',
    placa: '',
    cod_servicio: '',
    fecha_reservada: '',
    asistio: false,
    kilometraje: ''
  })

  const handleChange = (e) => {
    setReserva({
      ...reserva,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeBoolean = (e) => {
    setReserva({
      ...reserva,
      [e.target.name]: getBoolean(e.target.value)
    })
  }

  const handleChangeNumber = (e) => {
    setReserva({
      ...reserva,
      [e.target.name]: +e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await createReserva(reserva)
      navigate('/Reservas')
      toast.success(response.data)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getBoolean = (string) => {
    if (string === 'false') {
      return false
    } else {
      return true
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
          left: '59.2%',
          backgroundColor: 'white',
          width: '35vw',
          height: '80vh',
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
            fontSize: '28px'
          }}
        >
          Reservas
        </h1>
        <form
          style={{
            color: '#000',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            marginLeft: '9.5vw',
            marginTop: '3vh',
            fontWeight: 'bold',
            height: '70vh',
            paddingBottom: '5vh'
          }}
          onSubmit={handleSubmit}
        >
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '12vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              Codigo Reserva
            </h2>
            <input
              name='cod_reserva'
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
              onChange={handleChange}
              value={reserva.cod_reserva}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '12vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              Placa_Vehiculo
            </h2>
            <input
              name='placa'
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
              onChange={handleChange}
              value={reserva.placa}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '12vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              Codigo Servicio{' '}
            </h2>
            <input
              name='cod_servicio'
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
              onChange={handleChange}
              value={reserva.cod_servicio}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '12vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              FechaReservada
            </h2>
            <input
              name='fecha_reservada'
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
              placeholder='20-01-2023'
              onChange={handleChange}
              value={reserva.fecha_reservada}
            />
          </label>
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
              Asistencia
            </h2>
            <select
              name='asistio'
              data-te-select-init
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
              onChange={handleChangeBoolean}
              value={reserva.asistio}
            >
              <option value='true'>Si</option>
              <option value='false'>No</option>
            </select>
          </label>
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
              Kilometraje
            </h2>
            <input
              name='kilometraje'
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
              onChange={handleChangeNumber}
              value={reserva.kilometraje}
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
