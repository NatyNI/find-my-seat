import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ShowTable = () =>{
    const location = useLocation()
    const navigate = useNavigate()
    const {name, table, kids} = location.state || {};
    

    return(

        <div className="flex flex-col items-center p-6">
            <h1 className="mt-3 border-t-2 border-b-2 rounded border-gray-500 text-lg font-bold">
                {name}
            </h1> <br/>
            <h2 className="text-lg italic ">
                Locul dumneavoastră este la
            </h2>
            <h2 className="text p-0.5 font-bold text-lg bg-gray-300 border rounded">
                🍽️ masa {table} 
            </h2> 
            <h2 className="pt-2">
                {kids}
            </h2> <br/>
            <img
                src={`https://findmyseat.website/static/images/${table}.png`} alt="Seat"
            /> <br/>
            <button
                onClick={() =>navigate("/")}
                className=" border-2 border-black rounded-lg p-1.5 text-white text-xs font-bold bg-gradient-to-l from-gray-600 via-gray-500 to-gray-400"
            >
                ÎNAPOI LA CĂUTARE
            </button> <br/>
            <div className="flex flex-col items-center absolute bottom-0 p-4">
                <h2 className="text-sm inset-0 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(169,169,169,0.8)_0%,_rgba(169,169,169,0)_100%)]">
                    Mulțumim pentru prezența dumneavoastră!
                </h2>
                <h2 className="inset-0 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(169,169,169,0.8)_0%,_rgba(169,169,169,0)_100%)]">
                    Cu drag, Andrei & Miriam!
                </h2>
            </div>
        </div>

    )
}

export default ShowTable;