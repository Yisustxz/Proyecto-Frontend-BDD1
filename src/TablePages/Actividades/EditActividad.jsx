import React, { useEffect, useState } from 'react'
import FondoArbol from '../../Image/fondoarbol.jpg'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  getActividadById,
  updateActividad
} from '../../services/actividad.services'

export default function EditActividad() {
  const navigate = useNavigate()
  const { cod, num } = useParams()

  const [actividad, setActividad] = useState({
    descripcion_actividad: '',
    costo_actividad: 0
  })

  const handleChange = (e) => {
    setActividad({ ...actividad, [e.target.name]: e.target.value })
  }

  const handleChangeNumber = (e) => {
    setActividad({ ...actividad, [e.target.name]: +e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await updateActividad(actividad, cod, num)
      navigate('/Actividades')
      toast.success(response.data)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const fetchActividad = async () => {
    try {
      const data = await getActividadById(cod, num)
      setActividad({
        ...actividad,
        descripcion_actividad: data.item.descripcion_actividad,
        costo_actividad: data.item.costo_actividad
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchActividad()
  }, [])

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
          Actividades
        </h1>
        <form
          style={{
            color: '#000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'auto',
            marginLeft: '9.5vw',
            marginTop: '3vh',
            fontWeight: 'bold',
            minHeight: '40vh'
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
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              Descripcion
            </h2>
            <input
              name='descripcion_actividad'
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
              value={actividad.descripcion_actividad}
              onChange={handleChange}
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
                fontSize: '18px',
                marginBottom: '4px'
              }}
            >
              CostoActividad
            </h2>
            <input
              name='costo_actividad'
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
              value={actividad.costo_actividad}
              onChange={handleChangeNumber}
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
            <Link to='/Actividades'>
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
