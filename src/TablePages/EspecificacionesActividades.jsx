import { AiOutlineFileDone } from "react-icons/ai";
import EspecificacionesActividadesRows from "./TableRows/EspecificacionesActividadesRows";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEspecificacionesActividades } from "../services/especificaciones_actividades.services";

export default function EspecificacionesActividades() {
  const [especificacionesActividades, setEspecificacionesActividades] =
    useState([]);

  const fetchData = async () => {
    try {
      const data = await getEspecificacionesActividades(0, 100);
      setEspecificacionesActividades(data.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div
        style={{
          height: "60vh",
          width: "70vw",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "#478F4D",
            width: "90px",
            height: "90px",
            marginTop: "-6vh",
            borderRadius: "7px",
            marginLeft: "-55vw",
            boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <AiOutlineFileDone
            color={"#fff"}
            size={60}
            style={{ alignSelf: "center" }}
          />
        </div>
        <h1
          style={{
            marginLeft: "-27vw",
            marginTop: "1vh",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Especificaciones Actividades
        </h1>
        <div
          style={{
            width: "66vw",
            height: "4vh",
            marginTop: "2vh",
            borderBottomColor: "#737070",
            borderWidth: "2px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "57vw",
              height: "4vh",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "18px",
              fontWeight: "bold",
              borderRightColor: "#C1BFBF",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
              borderWidth: "2px",
            }}
          >
            <div
              style={{
                width: "13vw",
                height: "4vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Num_Unico
            </div>
            <div
              style={{
                width: "13vw",
                height: "4vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Num_Detalle
            </div>
            <div
              style={{
                width: "13vw",
                height: "4vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Codigo
            </div>
            <div
              style={{
                width: "13vw",
                height: "4vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Num_Consecutivo
            </div>
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          {especificacionesActividades.map((especificacion) => (
            <EspecificacionesActividadesRows
              key={
                especificacion.num_unico +
                especificacion.num_detalle +
                especificacion.cod_actividad +
                especificacion.num_consecutivo
              }
              {...especificacion}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          width: "95%",
          height: "60px",
        }}
      >
        <Link to="/AddEspeActi">
          <div
            style={{
              backgroundColor: "#478F4D",
              marginTop: "20px",
              borderRadius: "10px",
              width: "100px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h1 style={{ fontSize: "50px", fontWeight: "bold", color: "#fff" }}>
              +
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
