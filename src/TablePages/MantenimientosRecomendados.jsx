import { GiCarWheel } from "react-icons/gi";
import ConcesionariosRows from "./TableRows/ConcesionariosRows";
import { SlGraph } from "react-icons/sl";
import ClientesRows from "./TableRows/ClientesRows";
import ProductosRows from "./TableRows/ProductoRows";
import FamiliaProductosRows from "./TableRows/FamiliaProductosRows";
import FacturasRows from "./TableRows/FacturasRows";
import MantenimientosRows from "./TableRows/MantenimientosRecomendadoRows";
import MantenimientosRecomendadoRows from "./TableRows/MantenimientosRecomendadoRows";


export default function MantenimientosRecomendado() {
  return (
    <div>
      <div style={{ height: '60vh', width: '70vw', backgroundColor: '#fff', borderRadius: '10px', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ position: "absolute", backgroundColor: '#1D324E', width: '80px', height: '80px', marginTop: '-12vh', borderRadius: '7px', marginLeft: '40vw', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', justifyContent: 'center', flexDirection: 'row', cursor: 'pointer' }}>
          <SlGraph color={"#fff"} size={60} style={{ alignSelf: 'center' }} />
        </div>
        <h1 style={{position: "absolute", marginTop: '-9vh', marginLeft: '51vw', fontSize: '18px'}}>Statistics</h1>
        <div style={{ position: "absolute", backgroundColor: '#478F4D', width: '90px', height: '90px', marginTop: '-6vh', borderRadius: '7px', marginLeft: '-57vw', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
          <GiCarWheel color={"#fff"} size={60} style={{ alignSelf: 'center' }} />
        </div>
        <h1 style={{ marginLeft: '-26vw', marginTop: '1vh', fontSize: '24px', fontWeight: 'bold' }}>Mantenimientos Recomendados</h1>
        <div style={{ width: '64vw', height: '6vh', marginTop: '2vh', borderBottomColor: '#737070', borderWidth: '2px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
          <div style={{ width: '57vw',textAlign:"center", height: '6vh', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', fontSize: '18px', fontWeight: 'bold', borderRightColor: '#C1BFBF', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderWidth: '2px', }}>
            <div style={{ width: '11vw', height: '6vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Codigo Modelo</div> 
            <div style={{ width: '11vw', height: '6vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>codigo </div>   
            <div style={{ width: '11vw', height: '6vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Kilometraje</div>   
            <div style={{ width: '11vw', height: '6vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>Tiempo de Uso</div>  
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

          <MantenimientosRecomendadoRows/>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'end', width: '95%', height: '60px'}}>
      <div style={{backgroundColor: '#478F4D', marginTop: '20px', borderRadius: '10px', width: '100px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)"}}>
        <h1 style={{fontSize: '50px', fontWeight: 'bold', color: '#fff'}}>+</h1>
      </div>
      </div>
      

    </div>
  );
}