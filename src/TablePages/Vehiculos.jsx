import { AiFillCar } from "react-icons/ai";
import VehiculoRows from "./TableRows/VehiculosRows";
import { Link } from "react-router-dom";

export default function vehiculos() {
  return (
    <div>
      <div style={{ height: '64vh', width: '78vw', backgroundColor: '#fff', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ position: "absolute", backgroundColor: '#478F4D', width: '90px', height: '90px', marginTop: '-6vh', borderRadius: '7px', marginLeft: '-65vw', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
          <AiFillCar color={"#fff"} size={60} style={{ alignSelf: 'center' }} />
        </div>
        <h1 style={{ marginLeft: '-50vw', marginTop: '1vh', fontSize: '24px', fontWeight: 'bold' }}>Vehiculos</h1>
        <div style={{ width: '78vw', height: '7vh', marginTop: '2vh', borderBottomColor: '#737070', borderWidth: '2px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', display: 'flex', alignItems: 'center', flexDirection: 'row', textAlign: "center" }}>
          <div style={{ width: '72vw', height: '4vh', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', fontSize: '16px', fontWeight: 'bold', borderRightColor: '#C1BFBF', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px', }}>
            <div style={{ width: '11vw', height: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Placa</div>  
            <div style={{ width: '11vw', height: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Año del Vehiculo</div>
            <div style={{ width: '11vw', height: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Num Serial</div>
            <div style={{ width: '11vw', height: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Num Motor</div>
            <div style={{ width: '11vw', height: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Color</div>
            <div style={{ width: '11vw', height: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Fecha Venta</div>
            <div style={{ width: '11vw', height: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Concesionario Vendedor</div>
            <div style={{ width: '11vw', height: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Info</div>
            <div style={{ width: '11vw', height: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Cod modelo</div>
            <div style={{ width: '11vw', height: '4vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>C.I</div>
          </div>
        </div>
        <div style={{ overflow: 'auto' }}>
          {/* Ejemplo de como José Andrés hizo en nuestra practica de bd:
          const [escuelas, setEscuelas] = useState(null);

            useEffect(() => {
            const fetchEscuelas = async () => {
            const response = await axios.get(BASE_URL + "/escuelas");
            const escuelasFromBackend = response.data
            setEscuelas(escuelasFromBackend)
            };
           fetchEscuelas();
            }, []);

            Luego le pasan como parametros los valores que guardó en escuelas:
          {escuelas ? escuelas.map(escuelas => <EscRow {...escuelas} />) : 'Loading...'}
          */}

          <VehiculoRows/>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'end', width: '95%', height: '60px'}}>
        <Link to="/AddVeh">
            <div style={{backgroundColor: '#478F4D', marginTop: '20px', borderRadius: '10px', width: '100px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)"}}>
              <h1 style={{fontSize: '50px', fontWeight: 'bold', color: '#fff'}}>+</h1>
            </div>
        </Link> 
      </div>
      

    </div>
  );
}