import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DeleteModal from '../../Components/DeleteModal'
import { useState, useCallback } from 'react'
import { deleteFactura } from '../../services/factura.services'
import { toast } from 'react-toastify'

export default function FacturasRows({
  num_factura,
  costo_mano_obra,
  monto_total,
  fecha_factura,
  num_unico,
  getFacturas
}) {
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
    return day + '/' + month + '/' + year
  }

  const [open, setOpen] = useState(false)
  const handleDelete = useCallback(async (num_factura) => {
    try {
      const response = await deleteFactura(num_factura)
      getFacturas()
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
            {num_factura}
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
            {costo_mano_obra}
          </div>
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
            {monto_total}
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
            {getDate(fecha_factura)}
          </div>
          <div
            style={{
              width: '11vw',
              minHeight: '4vh',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              flex: 1,
              alignItems: 'center'
            }}
          >
            {num_unico}
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
          <Link to={`/EditFactu/${num_factura}`}>
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
          deleteFunction={() => handleDelete(num_factura)}
        />
      </div>
    </div>
  )
}
