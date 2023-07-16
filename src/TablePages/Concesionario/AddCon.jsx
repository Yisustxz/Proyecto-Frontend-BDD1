import React, { useState } from "react";
import FondoArbol from "../../Image/fondoarbol.jpg";
import { useNavigate } from "react-router-dom";
import { createConcesionario } from "../../services/concesionario.services";

export default function AddCon() {
  const navigate = useNavigate();
  const [concesionario, setConcesionario] = useState({
    rif: "",
    nombre: "",
    cod_est: "",
    num_consecutivo: "",
    ci_encargado: "",
  });

  const handleChange = (e) => {
    setConcesionario({
      ...concesionario,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeNumber = (e) => {
    setConcesionario({
      ...concesionario,
      [e.target.name]: + e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createConcesionario(concesionario);
      navigate("/Concesionarios");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <img
        src={FondoArbol}
        alt="fondoarbol"
        style={{
          height: "90vh",
          width: "40vw",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",
          position: "relative",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50vh",
          left: "59.4%",
          backgroundColor: "white",
          width: "35vw",
          minHeight: "80vh",
          borderRadius: "10px",
          transform: "translate(-50%, -50%",
          color: "#fff",
          zIndex: "2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "#000",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "1vh",
            fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          Concesionarios
        </h1>
        <form
          style={{
            color: "#000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "9.5vw",
            marginTop: "3vh",
            fontWeight: "bold",
          }}
          onSubmit={handleSubmit}
        >
          <label style={{ paddingBottom: "15px" }}>
            {" "}
            <h2
              style={{
                backgroundColor: "#1D324E",
                width: "5vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: "10px",
                color: "white",
                fontSize: "18px",
                marginBottom: "4px",
              }}
            >
              RIF
            </h2>
            <input
              name="rif"
              type="text"
              style={{
                borderWidth: "2px",
                borderColor: "#C1BFBF",
                borderRadius: "10px",
                marginBottom: "15px",
                paddingLeft: "10px",
                fontSize: "20px",
                fontWeight: "normal",
                width: "17vw",
              }}
              value={concesionario.rif}
              onChange={handleChange}
            />
          </label>
          <label style={{ paddingBottom: "15px" }}>
            {" "}
            <h2
              style={{
                backgroundColor: "#1D324E",
                width: "8vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: "10px",
                color: "white",
                fontSize: "18px",
                marginBottom: "4px",
              }}
            >
              Nombre
            </h2>
            <input
              name="nombre"
              type="text"
              style={{
                borderWidth: "2px",
                borderColor: "#C1BFBF",
                borderRadius: "10px",
                marginBottom: "15px",
                paddingLeft: "10px",
                fontSize: "20px",
                fontWeight: "normal",
                width: "17vw",
              }}
              value={concesionario.nombre}
              onChange={handleChange}
            />
          </label>
          <label style={{ paddingBottom: "15px" }}>
            {" "}
            <h2
              style={{
                backgroundColor: "#1D324E",
                width: "8vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: "10px",
                color: "white",
                fontSize: "18px",
                marginBottom: "4px",
              }}
            >
              CodEst
            </h2>
            <input
              name="cod_est"
              type="text"
              style={{
                borderWidth: "2px",
                borderColor: "#C1BFBF",
                borderRadius: "10px",
                marginBottom: "15px",
                paddingLeft: "10px",
                fontSize: "20px",
                fontWeight: "normal",
                width: "17vw",
              }}
              value={concesionario.cod_est}
              onChange={handleChange}
            />
          </label>
          <label style={{ paddingBottom: "15px" }}>
            {" "}
            <h2
              style={{
                backgroundColor: "#1D324E",
                width: "14vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: "10px",
                color: "white",
                fontSize: "18px",
                marginBottom: "4px",
              }}
            >
              NumConsecutivo
            </h2>
            <input
              name="num_consecutivo"
              type="number"
              style={{
                borderWidth: "2px",
                borderColor: "#C1BFBF",
                borderRadius: "10px",
                marginBottom: "15px",
                paddingLeft: "10px",
                fontSize: "20px",
                fontWeight: "normal",
                width: "17vw",
              }}
              value={concesionario.num_consecutivo}
              onChange={handleChangeNumber}
            />
          </label>
          <label style={{ paddingBottom: "15px" }}>
            {" "}
            <h2
              style={{
                backgroundColor: "#1D324E",
                width: "12vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: "10px",
                color: "white",
                fontSize: "18px",
                marginBottom: "4px",
              }}
            >
              CI. Encargado
            </h2>
            <input
              name="ci_encargado"
              type="text"
              style={{
                borderWidth: "2px",
                borderColor: "#C1BFBF",
                borderRadius: "10px",
                marginBottom: "15px",
                paddingLeft: "10px",
                fontSize: "20px",
                fontWeight: "normal",
                width: "17vw",
              }}
              value={concesionario.ci_encargado}
              onChange={handleChange}
            />
          </label>
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              width: "9vw",
              height: "5vh",
              borderRadius: "10px",
              backgroundColor: "#478F4D",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "3.5vw",
              cursor: "pointer",
              boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}
