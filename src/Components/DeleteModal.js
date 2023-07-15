import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DeleteModal({showModal, setShowModal}) {

  const modalStyle = {
    width: "400px",
    height: "200px",
    background: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: '72px'
  };

  return (
    <div style={showModal ? modalStyle : { display: "none" }}>
      <h3 style={{marginTop: '30px', marginBottom: '30px', fontSize: '17px', fontWeight: 'bold'}}>Estas seguro de que deseas eliminar esto?</h3>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> 
        <button type="button" style={{ width: '8vw', height: '5vh', borderRadius: '10px', backgroundColor: '#478F4D', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)", fontWeight: 'bold', fontSize: '20px' }}>Aceptar</button>
        <button type="button" onClick={() => setShowModal(false)} style={{ width: '8vw', height: '5vh', borderRadius: '10px', borderColor: '#478F4D', borderWidth: '2px', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '1vw', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)", fontWeight: 'bold', fontSize: '20px' }}>Cancelar</button>
      </div>
      
    </div>
  );
}
