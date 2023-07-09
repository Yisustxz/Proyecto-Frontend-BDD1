import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ClientesRows() {

    return (
      <div>
          <div style={{ width: '64vw', height: 'auto', marginTop: '1vh', borderBottomColor: '#C1BFBF', borderWidth: '2px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <div style={{ width: '57vw', minHeight: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: '16px', borderRightColor: '#C1BFBF', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>
                {/* 
                Colocar las variables donde está el texto :)
                 */}
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, alignItems: 'center', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>123456789</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1,  overflow: 'auto', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>Charbel Saad</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>charbel@gmail.com</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>0414924112</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1}}>0424924112</div>
            </div>
            <div style={{ minHeight: '4vh', width: '7vw', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <FaEdit color={"#192C45"} size={30} style={{cursor: 'pointer'}}/>
            <FaTrash color={"#192C45"} size={30} style={{cursor: 'pointer'}}/>
            </div>
          </div> 
      </div>
    );
  }