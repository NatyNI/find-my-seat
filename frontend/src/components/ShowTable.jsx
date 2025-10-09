import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ShowTable = () =>{
    const location = useLocation()
    const navigate = useNavigate()
    const {name, table, kids} = location.state || {};
    

    return(

        <div className="flex flex-col items-center p-1">
            <h1 className="mt-5 border-t-2 border-b-2 rounded border-gray-500 text-lg font-bold animate-bounce">
                {name}
            </h1>
            <h2 className="text-lg italic mt-2">
                Locul dumneavoastră este la
            </h2>
            <h2 className="text p-0.5 font-bold text-lg bg-gray-300 border rounded">
                🍽️ masa {table} 
            </h2> 
            <h2 className="pt-1">
                {kids}
            </h2> 
            <img className="w-[340px] h-[510px] p-4 pb-8"
                src={"https://findmyseat.website/static/images/last1.png"} alt="Plan tables"
            />
            <button
                onClick={() =>navigate("/")}
                className="fixed bottom-2 p-1 border-2 border-black rounded-lg p-1 text-white text-xs font-bold bg-gradient-to-l from-gray-600 via-gray-500 to-gray-400"
            >
                ÎNAPOI LA CĂUTARE
            </button> <br/>
           {/* 
            <div className="flex flex-col items-center absolute bottom-0 p-1">
                <h2 className="text-xs inset-0 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(169,169,169,0.8)_0%,_rgba(169,169,169,0)_100%)]">
                    Mulțumim pentru prezența dumneavoastră!
                </h2>
                <h2 className="text-xs inset-0 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(169,169,169,0.8)_0%,_rgba(169,169,169,0)_100%)]">
                    Cu drag, Andrei & Miriam!
                </h2>
            </div>*/}
        </div>

    )
}

export default ShowTable;