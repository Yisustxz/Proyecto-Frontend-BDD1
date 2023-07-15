import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteModal from "../../Components/DeleteModal";
import { useState } from "react";

export default function ProductosUtilizadosRows() {

  const [open, setOpen] = useState(false);

    return (
      <div>
          <div style={{ width: '64vw', height: 'auto', marginTop: '1vh', borderBottomColor: '#C1BFBF', borderWidth: '2px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <div style={{ width: '57vw', minHeight: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: '16px', borderRightColor: '#C1BFBF', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>
                {/* 
                Colocar las variables donde está el texto :)
                 */}
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, alignItems: 'center', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>121212</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1,  overflow: 'auto', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>222222</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, overflow: 'auto', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>11625415</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1,  overflow: 'auto', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>44444</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, overflow: 'auto', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>5</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>1</div>
            </div>
            <div style={{ minHeight: '4vh', width: '7vw', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Link to= "/EditProductoUt">
            <FaEdit color={"#192C45"} size={25} style={{cursor: 'pointer'}}/>
            </Link>
            <FaTrash color={"#192C45"} size={25} style={{cursor: 'pointer'}}  onClick={() => setOpen(true)}/>
            </div>
          </div>
          <DeleteModal showModal={open} setShowModal={setOpen}/> 
      </div>
    );
  }