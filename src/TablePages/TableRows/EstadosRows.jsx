import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DeleteModal from '../../Components/DeleteModal'
import { useState, useCallback } from 'react'
import { deleteEstado } from '../../services/estado.services'
import { toast } from 'react-toastify'

export default function EstadosRows({ cod_est, nombre_est, getEstado }) {
  const [open, setOpen] = useState(false)

  const handleDelete = useCallback(async (cod_est) => {
    try {
      const response = await deleteEstado(cod_est)
      getEstado()
      toast.success(response.item)
    } catch (error) {
      toast.error(error.message)
    }
  }, [])

  return (
    <div>
      <div
        style={{
          width: '64vw',
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
            {cod_est}
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
              overflow: 'auto'
            }}
          >
            {nombre_est}
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
          <Link to={`/EditEst/${cod_est}`}>
            <FaEdit color={'#192C45'} size={25} style={{ cursor: 'pointer' }} />
          </Link>
          <FaTrash
            color={'#192C45'}
            size={25}
            style={{ cursor: 'pointer' }}
            onClick={() => setOpen(true)}
          />
        </div>
        <DeleteModal
          showModal={open}
          setShowModal={setOpen}
          deleteFunction={() => handleDelete(cod_est)}
        />
      </div>
    </div>
  )
}
