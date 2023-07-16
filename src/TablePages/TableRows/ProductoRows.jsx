import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductosRows({
  cod_producto,
  nombre_producto,
  descripcion_producto,
  es_ecologico,
  precio,
  cantidad,
  cantidad_minima,
  cantidad_maxima,
  cod_tipo,
  proveedor,
}) {
  const getBoolean = (boolean) => {
    if (boolean === false || boolean === null) {
      return "No";
    } else if (boolean === true) {
      return "Si";
    }
  };

  return (
    <div>
      <div
        style={{
          width: "78vw",
          height: "auto",
          marginTop: "1vh",
          borderBottomColor: "#C1BFBF",
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
            minHeight: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            fontSize: "15px",
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
              minHeight: "4vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flex: 1,
              alignItems: "center",
              borderRightColor: "#D7D5D5",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
              borderWidth: "2px",
            }}
          >
            {cod_producto}
          </div>
          <div
            style={{
              width: "11vw",
              minHeight: "4vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              overflow: "auto",
              borderRightColor: "#D7D5D5",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
              borderWidth: "2px",
            }}
          >
            {nombre_producto}
          </div>
          <div
            style={{
              width: "11vw",
              minHeight: "4vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              overflow: "auto",
              borderRightColor: "#D7D5D5",
              marginLeft: "1vw",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
              borderWidth: "2px",
            }}
          >
            {descripcion_producto}
          </div>
          <div
            style={{
              width: "11vw",
              minHeight: "4vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              borderRightColor: "#D7D5D5",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
              borderWidth: "2px",
            }}
          >
            {proveedor}
          </div>
          <div
            style={{
              width: "11vw",
              minHeight: "4vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              borderRightColor: "#D7D5D5",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
              borderWidth: "2px",
            }}
          >
            {getBoolean(es_ecologico)}
          </div>
          <div
            style={{
              width: "11vw",
              minHeight: "4vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              borderRightColor: "#D7D5D5",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
              borderWidth: "2px",
            }}
          >
            {precio}
          </div>
          <div
            style={{
              width: "11vw",
              minHeight: "4vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              borderRightColor: "#D7D5D5",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
              borderWidth: "2px",
            }}
          >
            {cantidad}
          </div>
          <div
            style={{
              width: "11vw",
              minHeight: "4vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              borderRightColor: "#D7D5D5",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
              borderWidth: "2px",
            }}
          >
            {cantidad_minima}
          </div>
          <div
            style={{
              width: "11vw",
              minHeight: "4vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              borderRightColor: "#D7D5D5",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
              borderWidth: "2px",
            }}
          >
            {cantidad_maxima}
          </div>
          <div
            style={{
              width: "11vw",
              minHeight: "4vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            {cod_tipo}
          </div>
        </div>
        <div
          style={{
            minHeight: "4vh",
            width: "7vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Link to={`/EditPro/${cod_producto}`}>
            <FaEdit color={"#192C45"} size={25} style={{ cursor: "pointer" }} />
          </Link>
          <FaTrash color={"#192C45"} size={25} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}
