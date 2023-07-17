import React, { useState, useEffect } from 'react'
import FondoArbol from '../../Image/fondoarbol.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  getDetalleServicioById,
  updateDetalleServicio
} from '../../services/detalle_servicio.services'
import { toast } from 'react-toastify'

export default function EditDetalleSer() {
  const navigate = useNavigate()
  const { num, cod } = useParams()

  const [detalleServicio, setDetalleServicio] = useState({
    cantidad: '',
    costo: ''
  })

  const handleChangeNumber = (e) => {
    setDetalleServicio({
      ...detalleServicio,
      [e.target.name]: +e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await updateDetalleServicio(detalleServicio, num, cod)
      navigate('/DetallesServicio')
      toast.success(response.data)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const fetchEstado = async () => {
    try {
      const data = await getDetalleServicioById(num, cod)
      console.log(data)
      setDetalleServicio({
        ...detalleServicio,
        cantidad: parseInt(data.item.cantidad),
        costo: parseFloat(data.item.costo)
      })
    } catch (error) {
      toast.error(error.message)
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
          Detalles de Servicio
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
            fontSize: '24px',
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
              Cant
            </h2>
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
              onChange={handleChangeNumber}
              value={detalleServicio.cantidad}
            />
          </label>
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
              Costo
            </h2>
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
              onChange={handleChangeNumber}
              value={detalleServicio.costo}
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
            <Link to='/DetallesServicio'>
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
