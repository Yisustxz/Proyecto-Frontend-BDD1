import { BsArchiveFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { getFamiliaProducto } from '../services/familia_producto.services'
import FamiliaProductosRows from './TableRows/FamiliaProductosRows'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function FamiliaProductos() {
  const [FamiliaProductos, setFamiliaProductos] = useState([])

  const fetchData = async () => {
    try {
      const data = await getFamiliaProducto(0, 100)
      setFamiliaProductos(data.items)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <div
        style={{
          height: '60vh',
          width: '70vw',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#478F4D',
            width: '90px',
            height: '90px',
            marginTop: '-6vh',
            borderRadius: '7px',
            marginLeft: '-55vw',
            boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <BsArchiveFill
            color={'#fff'}
            size={60}
            style={{ alignSelf: 'center' }}
          />
        </div>
        <h1
          style={{
            marginLeft: '-35vw',
            marginTop: '1vh',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
        >
          Familia Productos
        </h1>
        <div
          style={{
            width: '64vw',
            height: '4vh',
            marginTop: '2vh',
            borderBottomColor: '#737070',
            borderWidth: '2px',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <div
            style={{
              width: '57vw',
              height: '4vh',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRightColor: '#C1BFBF',
              borderLeft: 'none',
              borderTop: 'none',
              borderBottom: 'none',
              borderWidth: '2px'
            }}
          >
            <div
              style={{
                width: '11vw',
                height: '4vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              Codigo
            </div>
            <div
              style={{
                width: '11vw',
                height: '4vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              Nombre
            </div>
          </div>
        </div>
        <div style={{ overflow: 'auto' }}>
          {FamiliaProductos.map((FamiliaProductos) => (
            <FamiliaProductosRows
              key={FamiliaProductos.cod_tipo}
              {...FamiliaProductos}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          width: '95%',
          height: '60px'
        }}
      >
        <Link to='/AddFamPro'>
          <div
            style={{
              backgroundColor: '#478F4D',
              marginTop: '20px',
              borderRadius: '10px',
              width: '100px',
              height: '60px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h1 style={{ fontSize: '50px', fontWeight: 'bold', color: '#fff' }}>
              +
            </h1>
          </div>
        </Link>
      </div>
    </div>
  )
}
