import ServiciosPersonalRows from './ServicioPersonalRows'
import { FaUserFriends } from 'react-icons/fa'
import { useState, useEffect, useCallback } from 'react'
import { getServicioPersonal } from '../../services/ServiciosPersonal.services'

export default function SolicitudServ() {
  const [solicitudServ, setSolicitudServ] = useState([])

  const fetchData = async () => {
    try {
      const data = await getServicioPersonal()
      setSolicitudServ(data.item)
    } catch (error) {
      console.log(error.message)
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
          <FaUserFriends
            color={'#fff'}
            size={60}
            style={{ alignSelf: 'center' }}
          />
        </div>
        <h1
          style={{
            marginLeft: '-31vw',
            marginTop: '1vh',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
        >
          Servicios por personal
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
              width: '64vw',
              height: '4vh',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              fontSize: '18px',
              fontWeight: 'bold'
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
              C.I Trabajador
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
              NombreTrabajador
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
              Mes
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
              CantSer por Mes
            </div>
          </div>
        </div>
        {solicitudServ.map((solicitud) => (
          <ServiciosPersonalRows
            key={solicitud.ci_trabajador}
            ci_trabajador={solicitud.ci_trabajador}
            nombre_trabajador={solicitud.nombre_trabajador}
            mes={solicitud.mes}
            cantidad_servicios={solicitud.cantidad_servicios}
          />
        ))}
      </div>
    </div>
  )
}
