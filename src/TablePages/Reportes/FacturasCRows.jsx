import { AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom'

export default function FacturasCRows() {
  
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
            Pedro Pérez
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
            22222
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
            }}
          >
            12/04/2022
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
          <Link to="/FacturaTemplate">
            <AiFillEye color={'#192C45'} size={25} style={{ cursor: 'pointer' }} />
          </Link>
      </div>
    </div>
    </div>
  )
}
