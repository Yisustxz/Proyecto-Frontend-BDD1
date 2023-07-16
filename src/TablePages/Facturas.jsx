import { AiOutlineFile } from "react-icons/ai";
import FacturasRows from "./TableRows/FacturasRows";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFacturas } from "../services/factura.services";

export default function Facturas() {
  const [facturas, setFacturas] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getFacturas(0, 100);
      setFacturas(data.items);
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
          <AiOutlineFile
            color={"#fff"}
            size={60}
            style={{ alignSelf: "center" }}
          />
        </div>
        <h1
          style={{
            marginLeft: "-40vw",
            marginTop: "1vh",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Facturas
        </h1>
        <div
          style={{
            width: "64vw",
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
                width: "11vw",
                height: "4vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              NumFactura
            </div>
            <div
              style={{
                width: "11vw",
                height: "4vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Costo Mano Obra
            </div>
            <div
              style={{
                width: "11vw",
                height: "4vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Monto Total
            </div>
            <div
              style={{
                width: "11vw",
                height: "4vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Fecha
            </div>
            <div
              style={{
                width: "11vw",
                height: "4vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              NumUnico
            </div>
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          {facturas.map((factura) => (
            <FacturasRows key={factura.num_factura} {...factura} />
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
        <Link to="/AddFactu">
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
