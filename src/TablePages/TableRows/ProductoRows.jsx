import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteModal from "../../Components/DeleteModal";
import { useState } from "react";

export default function ProductosRows() {

  const [open, setOpen] = useState(false);

    return (
      <div>
          <div style={{ width: '78vw', height: 'auto', marginTop: '1vh', borderBottomColor: '#C1BFBF', borderWidth: '2px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <div style={{ width: '72vw', minHeight: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: '15px', borderRightColor: '#C1BFBF', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>
                {/* 
                Colocar las variables donde está el texto :)
                 */}
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, alignItems: 'center', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>123456789</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1,  overflow: 'auto', borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px'}}>Charbel</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1, overflow: 'auto', borderRightColor: '#D7D5D5', marginLeft: '1vw', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>charbel@gmail.com</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>0414924112</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1,  borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>xs</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>xs</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>xs</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, borderRightColor: '#D7D5D5', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px' }}>xs</div>
                <div style={{ width: '11vw', minHeight: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>xs</div>
            </div>
            <div style={{ minHeight: '4vh', width: '7vw', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Link to="/EditPro">
                <FaEdit color={"#192C45"} size={25} style={{ cursor: 'pointer' }} />
            </Link> 
            <FaTrash color={"#192C45"} size={25} style={{cursor: 'pointer'}} onClick={() => setOpen(true)}/>
            </div>
          </div> 
          <DeleteModal showModal={open} setShowModal={setOpen}/>
      </div>
    );
  }