import { FaTrash } from 'react-icons/fa'
import DeleteModal from '../../Components/DeleteModal'
import { useState, useCallback } from 'react'
import { deleteEspecificacionActividad } from '../../services/especificaciones_actividades.services'
import { toast } from 'react-toastify'

export default function EspecificacionesActividadesRows({
  num_unico,
  num_detalle,
  cod_actividad,
  num_consecutivo,
  getEspecificacionesActividades
}) {
  const [open, setOpen] = useState(false)

  const handleDelete = useCallback(
    async (num_unico, num_detalle, cod_actividad, num_consecutivo) => {
      try {
        const response = await deleteEspecificacionActividad(
          num_unico,
          num_detalle,
          cod_actividad,
          num_consecutivo
        )
        getEspecificacionesActividades()
        toast.success(response.item)
      } catch (error) {
        toast.error(error.message)
      }
    },
    []
  )
  return (
    <div>
      <div
        style={{
          width: '66vw',
          height: 'auto',
          marginTop: '1vh',
          borderBottomColor: '#C1BFBF',
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
            minHeight: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            fontSize: '16px',
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
              minHeight: '4vh',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              flex: 1,
              alignItems: 'center',
              borderRightColor: '#D7D5D5',
              borderLeft: 'none',
              borderTop: 'none',
              borderBottom: 'none',
              borderWidth: '2px'
            }}
          >
            {num_unico}
          </div>
          <div
            style={{
              width: '11vw',
              minHeight: '4vh',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              overflow: 'auto',
              borderRightColor: '#D7D5D5',
              borderLeft: 'none',
              borderTop: 'none',
              borderBottom: 'none',
              borderWidth: '2px'
            }}
          >
            {num_detalle}
          </div>
          <div
            style={{
              width: '11vw',
              minHeight: '4vh',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              overflow: 'auto',
              alignItems: 'center',
              flex: 1,
              borderRightColor: '#D7D5D5',
              borderLeft: 'none',
              borderTop: 'none',
              borderBottom: 'none',
              borderWidth: '2px'
            }}
          >
            {cod_actividad}
          </div>
          <div
            style={{
              width: '11vw',
              minHeight: '4vh',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1
            }}
          >
            {num_consecutivo}
          </div>
        </div>
        <div
          style={{
            minHeight: '4vh',
            width: '7vw',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <FaTrash
            color={'#192C45'}
            size={25}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setOpen(true)
            }}
          />
        </div>
        <DeleteModal
          showModal={open}
          setShowModal={setOpen}
          deleteFunction={() => {
            handleDelete(num_unico, num_detalle, cod_actividad, num_consecutivo)
          }}
        />
      </div>
    </div>
  )
}
