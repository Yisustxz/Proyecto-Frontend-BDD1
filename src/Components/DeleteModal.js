export default function DeleteModal({
  showModal,
  setShowModal,
  deleteFunction,
}) {
  const modalStyle = {
    width: "400px",
    height: "200px",
    background: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: "72px",
  };

  return (
    <div
      className="bg-opacity-50 bg-black"
      style={
        showModal
          ? {
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              cursor: "default",
            }
          : { display: "none" }
      }
    >
      <div style={modalStyle}>
        <h3
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          ¿Está seguro de que desea eliminar esto?
        </h3>
        <h3 style={{ marginBottom: "30px", fontSize: "15px" }}>
          Esta acción no podrá ser revertida
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
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
            onClick={deleteFunction}
          >
            Aceptar
          </button>
          <button
            type="button"
            onClick={() => setShowModal(false)}
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
        </div>
      </div>
    </div>
  );
}
