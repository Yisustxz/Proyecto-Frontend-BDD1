import React, { useState, useEffect } from 'react'
import FondoArbol from '../../Image/fondoarbol.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  getVehiculoById,
  updateVehiculo
} from '../../services/vehiculo.services'
import { toast } from 'react-toastify'

export default function EditVeh() {
  const navigate = useNavigate()
  const { cod } = useParams()

  const [vehiculo, setVehiculo] = useState({
    ano_vehiculo: '',
    num_serial: '',
    num_motor: '',
    color: '',
    fecha_venta: '',
    concesionario_vendedor: '',
    info_importante: '',
    cod_modelo: '',
    ci_cliente: ''
  })

  const handleChange = (e) => {
    setVehiculo({
      ...vehiculo,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeNumber = (e) => {
    setVehiculo({
      ...vehiculo,
      [e.target.name]: +e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await updateVehiculo(vehiculo, cod)
      navigate('/Vehiculos')
      toast.success(response.data)
    } catch (error) {
      toast.error(error.message)
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
      const data = await getVehiculoById(cod)
      console.log(data)
      setVehiculo({
        ...vehiculo,
        ano_vehiculo: getDate(data.item.ano_vehiculo),
        num_serial: data.item.num_serial,
        num_motor: data.item.num_motor,
        color: data.item.color,
        fecha_venta: getDate(data.item.fecha_venta),
        concesionario_vendedor: data.item.concesionario_vendedor,
        info_importante: data.item.info_importante,
        cod_modelo: data.item.cod_modelo,
        ci_cliente: data.item.ci_cliente
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
          Vehiculo
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
                width: '9vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              AñoVehiculo
            </h2>
            <input
              name='ano_vehiculo'
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
              value={vehiculo.ano_vehiculo}
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
              NumSerial
            </h2>
            <input
              name='num_serial'
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
              value={vehiculo.num_serial}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '9vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              NumMotor
            </h2>
            <input
              name='num_motor'
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
              value={vehiculo.num_motor}
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
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              Color
            </h2>
            <input
              name='color'
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
              value={vehiculo.color}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '9vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              FechaVenta
            </h2>
            <input
              name='fecha_venta'
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
              value={vehiculo.fecha_venta}
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
              ConcesionarioVendedor
            </h2>
            <input
              name='concesionario_vendedor'
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
              value={vehiculo.concesionario_vendedor}
            />
          </label>
          <label style={{ paddingBottom: '15px' }}>
            {' '}
            <h2
              style={{
                backgroundColor: '#1D324E',
                width: '11vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '10px',
                color: 'white',
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              InfoImportante
            </h2>
            <input
              name='info_importante'
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
              value={vehiculo.info_importante}
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
              Cod_Modelo
            </h2>
            <input
              name='cod_modelo'
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
              value={vehiculo.cod_modelo}
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
                fontSize: '20px',
                marginBottom: '4px'
              }}
            >
              CI
            </h2>
            <input
              name='ci_cliente'
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
              value={vehiculo.ci_cliente}
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
            <Link to='/Vehiculos'>
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
