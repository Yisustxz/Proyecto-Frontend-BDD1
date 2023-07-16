import { AiOutlineFile } from "react-icons/ai";
import PagosRows from "./TableRows/PagosRows";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPagos } from "../services/pago.services";

export default function Pagos() {
  const [pagos, setPagos] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getPagos(0, 100);
      setPagos(data.items);
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
          width: "78vw",
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
            marginLeft: "-65vw",
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
            marginLeft: "-51vw",
            marginTop: "1vh",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Pagos
        </h1>
        <div
          style={{
            width: "78vw",
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
              width: "72vw",
              height: "4vh",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "16px",
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
              Num Factura
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
              NumConsecutivo
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
              Modalidad
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
              Monto
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
              NumTarjeta
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
              Banco
            </div>
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          {pagos.map((pago) => (
            <PagosRows
              key={pago.num_factura + pago.num_consecutivo}
              {...pago}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          width: "100%",
          height: "60px",
        }}
      >
        <Link to="/AddPagos">
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
