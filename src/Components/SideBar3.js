import { Link } from "react-router-dom";

export default function SideBar3(){
    return(
        <div className="flex flex-col h-screen w-64 bg-gray-800 text-white">
      <div className="flex items-center justify-center h-20 border-b border-gray-600">
        <h1 className="text-2xl font-bold">SideBar</h1>
      </div>
      <div className="flex flex-col items-start justify-start flex-grow p-4">
        <Link to="/Concesionarios">
        <a href="#" className="my-2 text-gray-300 hover:text-white">Link 1</a>
        </Link>
        <a href="#" className="my-2 text-gray-300 hover:text-white">Link 2</a>
        <a href="#" className="my-2 text-gray-300 hover:text-white">Link 3</a>
      </div>
    </div>
    );
}