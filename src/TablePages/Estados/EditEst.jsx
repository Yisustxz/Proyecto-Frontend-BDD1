import React, { useEffect, useState } from "react";
import FondoArbol from "../../Image/fondoarbol.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEstadoById, updateEstado } from "../../services/estado.services";

export default function EditEst() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [estado, setEstado] = useState({
    nombre_est: "",
  });

  const handleChange = (e) => {
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await updateEstado(estado, id);
      navigate("/Estados");
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchEstado = async () => {
    try {
      const data = await getEstadoById(id);
      setEstado({ ...estado, nombre_est: data.item.nombre_est });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchEstado();
  }, []);

  return (
    <div>
      <img
        src={FondoArbol}
        alt="fondoarbol"
        style={{
          height: "50vh",
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
          left: "59%",
          backgroundColor: "white",
          width: "35vw",
          minHeight: "40vh",
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
          Estados
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
              NombreEst
            </h2>
            <input
              name="nombre_est"
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
              value={estado.nombre_est}
              onChange={handleChange}
            />
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <button
              type="button"
              onClick={handleSubmit}
              style={{
                width: "8vw",
                height: "5vh",
                borderRadius: "10px",
                backgroundColor: "#478F4D",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Editar
            </button>
            <Link to="/Estados">
              <button
                type="button"
                style={{
                  width: "8vw",
                  height: "5vh",
                  borderRadius: "10px",
                  borderColor: "#478F4D",
                  borderWidth: "2px",
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "1vw",
                  cursor: "pointer",
                  boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
