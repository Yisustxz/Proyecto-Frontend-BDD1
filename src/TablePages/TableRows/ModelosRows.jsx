import { FaEdit, FaTrash } from "react-icons/fa";

export default function ModelosRows() {

    return (
      <div>
          <div style={{ width: '78vw', height: 'auto', marginTop: '1vh', borderBottomColor: '#C1BFBF', borderWidth: '2px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <div style={{ width: '72vw', minHeight: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: '16px', borderRightColor: '#C1BFBF', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>
                {/* 
                Colocar las variables donde está el texto :)
                 */}
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, alignItems: 'center', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>123</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1,  overflow: 'auto', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>Optra</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>5</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>Chevrolet</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>50 kg</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>Vegetal</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>prueba</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>91</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1}}>prueba</div>
            </div>
            <div style={{ minHeight: '4vh', width: '7vw', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <FaEdit color={"#192C45"} size={20} style={{cursor: 'pointer'}}/>
            <FaTrash color={"#192C45"} size={20} style={{cursor: 'pointer'}}/>
            </div>
          </div> 
      </div>
    );
  }