import MayVen from '../../Image/mayVen.png'
import MenVen from '../../Image/menVen.png'
import SelloRechazado from '../../Image/selloRechazado.png'
import { useState, useEffect } from 'react'
import { getVentaProductoMayor } from '../../services/ventasProductoMayor.services'
import { getVentaProductoMenor } from '../../services/ventasProductoMenor.services'
import { getVentaProductoPorcentaje } from '../../services/ventasProductoPorcentaje.services'

export default function VentasXProducto() {
  const [ventasProductoMayor, setventasProductoMayor] = useState([])
  const [ventasProductoMenor, setventasProductoMenor] = useState([])
  const [ventasProductoPorcentaje, setventasProductoPorcentaje] = useState([])

  const fetchData = async () => {
    try {
      const data = await getVentaProductoMayor()
      setventasProductoMayor(data.item)
      console.log('hola1', data.item)
      const data2 = await getVentaProductoMenor()
      setventasProductoMenor(data2.item)
      console.log('hola2', data2.item)
      const data3 = await getVentaProductoPorcentaje()
      setventasProductoPorcentaje(data3.item)
      console.log('hola3', data3.item)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '28px',
          backgroundColor: '#478F4D',
          borderRadius: '10px'
        }}
      >
        Salida por ventas de productos
      </h1>
      <div
        style={{
          height: '60vh',
          width: '70vw',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <div
          style={{
            backgroundColor: 'red',
            height: '55vh',
            width: '32vw',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '20px',
              marginTop: '20px'
            }}
          >
            Mayor salida de ventas
          </h1>
          <div style={{ height: '25vh' }}>
            <img src={MayVen} style={{ height: '25vh', width: 'auto' }} />
          </div>
          <div style={{ marginLeft: '7vw' }}>
            <div
              style={{
                height: '4vh',
                width: '32vw',
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '1vw',
                alignItems: 'center',
                marginTop: '2vh'
              }}
            >
              <h2
                style={{
                  textAlign: 'center',
                  backgroundColor: '#1D324E',
                  width: '12vw',
                  color: 'white',
                  borderRadius: '10px',
                  fontWeight: 'bold'
                }}
              >
                Cod_Producto
              </h2>
              <h2
                style={{
                  textAlign: 'left',
                  marginLeft: '1vw',
                  width: '8vw',
                  borderWidth: '2px',
                  borderColor: '#D7D5D5',
                  borderTop: 'none',
                  borderRight: 'none',
                  borderLeft: 'none'
                }}
              >
                {ventasProductoMayor.cod_producto}
              </h2>
            </div>
            <div
              style={{
                height: '4vh',
                width: '32vw',
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '1vw',
                alignItems: 'center',
                marginTop: '2vh'
              }}
            >
              <h2
                style={{
                  textAlign: 'center',
                  backgroundColor: '#1D324E',
                  width: '12vw',
                  color: 'white',
                  borderRadius: '10px',
                  fontWeight: 'bold'
                }}
              >
                Nombre
              </h2>
              <h2
                style={{
                  textAlign: 'left',
                  marginLeft: '1vw',
                  width: '8vw',
                  borderWidth: '2px',
                  borderColor: '#D7D5D5',
                  borderTop: 'none',
                  borderRight: 'none',
                  borderLeft: 'none'
                }}
              >
                {ventasProductoMayor.nombre_producto}
              </h2>
            </div>
            <div
              style={{
                height: '4vh',
                width: '32vw',
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '1vw',
                alignItems: 'center',
                marginTop: '2vh'
              }}
            >
              <h2
                style={{
                  textAlign: 'center',
                  backgroundColor: '#1D324E',
                  width: '12vw',
                  color: 'white',
                  borderRadius: '10px',
                  fontWeight: 'bold'
                }}
              >
                CantVentas
              </h2>
              <h2
                style={{
                  textAlign: 'left',
                  marginLeft: '1vw',
                  width: '8vw',
                  borderWidth: '2px',
                  borderColor: '#D7D5D5',
                  borderTop: 'none',
                  borderRight: 'none',
                  borderLeft: 'none'
                }}
              >
                {ventasProductoMayor.total_salida_ventas}
              </h2>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'red',
            height: '55vh',
            width: '32vw',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '20px',
              marginTop: '20px'
            }}
          >
            Menor salida de ventas
          </h1>
          <div style={{ height: '25vh' }}>
            <img src={MenVen} style={{ height: '25vh', width: 'auto' }} />
          </div>
          <div style={{ marginLeft: '7vw' }}>
            <div
              style={{
                height: '4vh',
                width: '32vw',
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '1vw',
                alignItems: 'center',
                marginTop: '2vh'
              }}
            >
              <h2
                style={{
                  textAlign: 'center',
                  backgroundColor: '#1D324E',
                  width: '12vw',
                  color: 'white',
                  borderRadius: '10px',
                  fontWeight: 'bold'
                }}
              >
                Cod_Producto
              </h2>
              <h2
                style={{
                  textAlign: 'left',
                  marginLeft: '1vw',
                  width: '8vw',
                  borderWidth: '2px',
                  borderColor: '#D7D5D5',
                  borderTop: 'none',
                  borderRight: 'none',
                  borderLeft: 'none'
                }}
              >
                {ventasProductoMenor.cod_producto}
              </h2>
            </div>
            <div
              style={{
                height: '4vh',
                width: '32vw',
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '1vw',
                alignItems: 'center',
                marginTop: '2vh'
              }}
            >
              <h2
                style={{
                  textAlign: 'center',
                  backgroundColor: '#1D324E',
                  width: '12vw',
                  color: 'white',
                  borderRadius: '10px',
                  fontWeight: 'bold'
                }}
              >
                Nombre
              </h2>
              <h2
                style={{
                  textAlign: 'left',
                  marginLeft: '1vw',
                  width: '8vw',
                  borderWidth: '2px',
                  borderColor: '#D7D5D5',
                  borderTop: 'none',
                  borderRight: 'none',
                  borderLeft: 'none'
                }}
              >
                {ventasProductoMenor.nombre_producto}
              </h2>
            </div>
            <div
              style={{
                height: '4vh',
                width: '32vw',
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '1vw',
                alignItems: 'center',
                marginTop: '2vh'
              }}
            >
              <h2
                style={{
                  textAlign: 'center',
                  backgroundColor: '#1D324E',
                  width: '12vw',
                  color: 'white',
                  borderRadius: '10px',
                  fontWeight: 'bold'
                }}
              >
                CantVentas
              </h2>
              <h2
                style={{
                  textAlign: 'left',
                  marginLeft: '1vw',
                  width: '8vw',
                  borderWidth: '2px',
                  borderColor: '#D7D5D5',
                  borderTop: 'none',
                  borderRight: 'none',
                  borderLeft: 'none'
                }}
              >
                {ventasProductoMenor.total_salida_ventas}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '12vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            width: '70%',
            height: '12vh',
            backgroundColor: '#478F4D',
            marginTop: '30px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <h1
            style={{
              fontWeight: 'bold',
              fontSize: '50px',
              color: 'white',
              marginLeft: '50px'
            }}
          >
            {ventasProductoPorcentaje.total_productos}%
          </h1>
          <h1
            style={{
              textAlign: 'center',
              marginLeft: '20px',
              fontWeight: 'bold',
              fontSize: '28px',
              color: 'white'
            }}
          >
            {' '}
            Productos no ecológicos en el almacén
          </h1>
          <img
            src={SelloRechazado}
            style={{ height: '150px', width: 'auto' }}
          />
        </div>
      </div>
    </div>
  )
}
