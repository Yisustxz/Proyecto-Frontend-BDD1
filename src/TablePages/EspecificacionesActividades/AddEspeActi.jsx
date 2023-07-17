import React, { useState } from 'react'
import FondoArbol from '../../Image/fondoarbol.jpg'
import { useNavigate } from 'react-router-dom'
import { createEspecificacionActividad } from '../../services/especificaciones_actividades.services'
import { toast } from 'react-toastify'

export default function AddEspeActi() {
  const navigate = useNavigate()
  const [especificacionActividad, setEspecificacionActividad] = useState({
    num_unico: '',
    num_detalle: '',
    cod_actividad: '',
    num_consecutivo: ''
  })

  const handleChange = (e) => {
    setEspecificacionActividad({
      ...especificacionActividad,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeNumber = (e) => {
    setEspecificacionActividad({
      ...especificacionActividad,
      [e.target.name]: +e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await createEspecificacionActividad(
        especificacionActividad
      )
      navigate('/EspecificacionesActividades')
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
            fontSize: '30px'
          }}
        >
          Especificaciones de Actividades{' '}
        </h1>
        <form
          style={{
            color: '#000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '9.5vw',
            marginTop: '3vh',
            fontWeight: 'bold'
          }}
          onSubmit={handleSubmit}
        >
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
              NumUnico
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
              value={especificacionActividad.num_unico}
              onChange={handleChangeNumber}
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
              NumDetalle
            </h2>
            <input
              name='num_detalle'
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
              value={especificacionActividad.num_detalle}
              onChange={handleChangeNumber}
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
              Codigo
            </h2>
            <input
              name='cod_actividad'
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
              value={especificacionActividad.cod_actividad}
              onChange={handleChange}
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
              NumConsecutivo
            </h2>
            <input
              name='num_consecutivo'
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
              value={especificacionActividad.num_consecutivo}
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
