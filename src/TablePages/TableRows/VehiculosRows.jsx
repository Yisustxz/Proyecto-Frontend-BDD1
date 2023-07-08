import { FaEdit, FaTrash } from "react-icons/fa";

export default function VehiculoRows() {

    return (
      <div>
          <div style={{ width: '78vw', height: 'auto', marginTop: '1vh', borderBottomColor: '#C1BFBF', borderWidth: '2px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <div style={{ width: '72vw', textAlign:"center" ,minHeight: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: '15px', borderRightColor: '#C1BFBF', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>
                {/* 
                Colocar las variables donde está el texto :)
                 */}
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, alignItems: 'center', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>123456789</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1,  overflow: 'auto', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>2022</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>30312</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>2568</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>Blanco</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>21-12-2023</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>toyota</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', overflow: 'auto', borderBottom: 'none', borderWidth: '2px'}}>foturner 5 puertas</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>1234</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1}}>28384964</div>
            </div>
            <div style={{ minHeight: '4vh', width: '7vw', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <FaEdit color={"#192C45"} size={25} style={{cursor: 'pointer'}}/>
            <FaTrash color={"#192C45"} size={25} style={{cursor: 'pointer'}}/>
            </div>
          </div> 
      </div>
    );
  }