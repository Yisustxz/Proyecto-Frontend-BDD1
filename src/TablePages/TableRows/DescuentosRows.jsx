import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteModal from "../../Components/DeleteModal";
import { useState } from "react";
import { deleteDescuento } from "../../services/descuento.services";
import { toast } from "react-toastify";

export default function DescuentosRows({ porcentaje, rango_min, rango_max }) {
  const [open, setOpen] = useState(false);

  const handleDelete = async (porcentaje) => {
    try {
      const response = await deleteDescuento(porcentaje);
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
            {porcentaje}
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
            {rango_min}
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
            {rango_max}
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
          <Link to={`/EditDescuento/${porcentaje}`}>
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
            handleDelete(porcentaje);
          }}
        />
      </div>
    </div>
  );
}
