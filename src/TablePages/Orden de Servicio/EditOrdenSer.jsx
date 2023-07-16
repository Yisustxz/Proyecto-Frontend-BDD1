import React, { useState, useEffect } from 'react'
import FondoArbol from '../../Image/fondoarbol.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  getOrdenesServicioById,
  updateOrdenServicio
} from '../../services/ordenesServicio.services'

export default function EditOrdenSer() {
  const navigate = useNavigate()
  const { cod } = useParams()

  const [ordenServicio, setOrdenServicio] = useState({
    ci_autorizado: null,
    nombre_autorizado: null,
    hora_entrada: '',
    hora_salida_estimada: '',
    hora_salida_real: '',
    fecha_entrada: '',
    fecha_salida_estimada: '',
    fecha_salida_real: '',
    placa: '',
    ci_trabajador: ''
  })

  const handleChange = (e) => {
    setOrdenServicio({
      ...ordenServicio,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await updateOrdenServicio(ordenServicio, cod)
      navigate('/OrdenesServicio')
    } catch (error) {
      console.log(error.message)
    }
  }

  const getDate = (String) => {
    const fechaString = String
    const fecha = new Date(fechaString)

    const year = fecha.getFullYear()
    let month = fecha.getMonth() + 1
    if (month < 10) {
      month = '0' + month
    }
    let day = fecha.getDate()
    if (day < 10) {
      day = '0' + day
    }
    return year + '-' + month + '-' + day
  }

  const fetchEstado = async () => {
    try {
      const data = await getOrdenesServicioById(cod)
      console.log(data)
      setOrdenServicio({
        ...ordenServicio,
        ci_autorizado: data.item.ci_autorizado,
        hora_entrada: data.item.hora_entrada,
        hora_salida_estimada: data.item.hora_salida_estimada,
        hora_salida_real: data.item.hora_salida_real,
        fecha_entrada: getDate(data.item.fecha_entrada),
        fecha_salida_estimada: getDate(data.item.fecha_salida_estimada),
        fecha_salida_real: getDate(data.item.fecha_salida_real),
        placa: data.item.placa,
        ci_trabajador: data.item.ci_trabajador
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchEstado()
  }, [])
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
            fontSize: '28px'
          }}
        >
          Orden de Servicio
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
                width: '5vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              CI_A
            </h2>
            <input
              name='ci_autorizado'
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
              onChange={handleChange}
              value={ordenServicio.ci_autorizado}
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
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              Nombre_A
            </h2>
            <input
              name='nombre_autorizado'
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
              value={ordenServicio.nombre_autorizado}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '7vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              HoraEnt
            </h2>
            <input
              name='hora_entrada'
              type='time'
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
              value={ordenServicio.hora_entrada}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '7vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              HoraSEst
            </h2>
            <input
              name='hora_salida_estimada'
              type='time'
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
              value={ordenServicio.hora_salida_estimada}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '7vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              HoraSReal
            </h2>
            <input
              name='hora_salida_real'
              type='time'
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
              value={ordenServicio.hora_salida_real}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '7vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              FechaEnt
            </h2>
            <input
              name='fecha_entrada'
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
              onChange={handleChange}
              value={ordenServicio.fecha_entrada}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '7vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              FechaSEst
            </h2>
            <input
              name='fecha_salida_estimada'
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
              onChange={handleChange}
              value={ordenServicio.fecha_salida_estimada}
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
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              FechaSReal
            </h2>
            <input
              name='fecha_salida_real'
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
              onChange={handleChange}
              value={ordenServicio.fecha_salida_real}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '5vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              Placa
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
              value={ordenServicio.placa}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '5vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              CI
            </h2>
            <input
              name='ci_trabajador'
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
              value={ordenServicio.ci_trabajador}
            />
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
              Editar
            </button>
            <Link to='/OrdenesServicio'>
              <button
                type='button'
                style={{
                  width: '8vw',
                  height: '5vh',
                  borderRadius: '10px',
                  borderColor: '#478F4D',
                  borderWidth: '2px',
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '1vw',
                  cursor: 'pointer',
                  boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.2)',
                  fontWeight: 'bold',
                  fontSize: '20px'
                }}
              >
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
