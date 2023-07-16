import React, { useEffect, useState } from "react";
import FondoArbol from "../../Image/fondoarbol.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCiudadById, updateCiudad } from "../../services/ciudad.services";

export default function EditCiudad() {
  const navigate = useNavigate();
  const { cod, num } = useParams();

  const [ciudad, setCiudad] = useState({
    nombre_ciudad: "",
  });

  const handleChange = (e) => {
    setCiudad({ ...ciudad, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await updateCiudad(ciudad, cod, num);
      navigate("/Ciudades");
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchCiudad = async () => {
    try {
      const data = await getCiudadById(cod, num);
      setCiudad({ ...ciudad, nombre_ciudad: data.item.nombre_ciudad });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCiudad();
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
          Ciudades
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
                width: "10vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: "10px",
                color: "white",
                fontSize: "18px",
                marginBottom: "4px",
              }}
            >
              NombreCiudad
            </h2>
            <input
              name="nombre_ciudad"
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
              value={ciudad.nombre_ciudad}
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
            <Link to="/Ciudades">
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
