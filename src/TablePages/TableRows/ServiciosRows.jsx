import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteModal from "../../Components/DeleteModal";
import { useState } from "react";
import { deleteServicio } from "../../services/servicio.services";
import { toast } from "react-toastify";

export default function ServiciosRows({
  cod_servicio,
  nombre_servicio,
  descripcion_servicio,
  tiempo_reserva,
  capacidad,
  ci_trabajador,
  porcentaje,
}) {
  const [open, setOpen] = useState(false);

  const handleDelete = async (cod_servicio) => {
    try {
      const response = await deleteServicio(cod_servicio);
      toast.success(response.item);
    } catch (error) {
      toast.error(error.message);
    }
  };

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
              width: "9vw",
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
            {cod_servicio}
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
            {nombre_servicio}
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
            {descripcion_servicio}
          </div>
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
            {tiempo_reserva}
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
            {capacidad}
          </div>
          <div
            style={{
              width: "9vw",
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
            {porcentaje}
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
          <Link to={`/EditServicio/${cod_servicio}`}>
            <FaEdit color={"#192C45"} size={25} style={{ cursor: "pointer" }} />
          </Link>
          <FaTrash
            color={"#192C45"}
            size={25}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
        <DeleteModal
          showModal={open}
          setShowModal={setOpen}
          deleteFunction={() => {
            handleDelete(cod_servicio);
          }}
        />
      </div>
    </div>
  );
}
