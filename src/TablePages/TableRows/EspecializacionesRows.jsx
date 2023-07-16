import { FaEdit, FaTrash } from "react-icons/fa";

export default function EspecializacionesRows({ ci_trabajador, cod_servicio }) {
  return (
    <div>
      <div
        style={{
          width: "64vw",
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
            width: "57vw",
            minHeight: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            fontSize: "16px",
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
            {ci_trabajador}
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
            {cod_servicio}
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
          <FaTrash color={"#192C45"} size={25} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}
