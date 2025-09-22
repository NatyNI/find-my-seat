import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShowSeat = () =>{
    const location = useLocation()
    const navigate = useNavigate()

    const {name, table, kids} = location.state || {};
    return(

        <div className="flex flex-col items-center p-6">
            <h1 className="mt-3 border-t-2 border-b-2 rounded border-gray-500 text-lg font-bold">
                {name}
            </h1> <br/>
            <h2 className="text-lg">
                Locul dumneavoastră este la
            </h2>
            <h2 className="text p-1 font-bold text-lg bg-gray-300 border rounded">
                masa {table} 🍽️
            </h2> <br/>
            <h2>
                {kids}
            </h2> <br/>
            <img
                src={`/images/${table}.png`}
            /> <br/>
            <button
                onClick={() =>navigate("/")}
                className="focus:outline-none focus:ring-1 focus:ring-green-500 hover:bg-black-800 rounded-lg p-1 text-white font-bold bg-gray-500 "
            >
                ÎNAPOI LA CĂUTARE
            </button> <br/>
            <div className="flex flex-col items-center absolute bottom-[10px]">
                <h2 className="text-sm">
                    Mulțumim pentru prezența dumneavoastră!
                </h2>
                <h2>
                    Cu drag, Andrei & Miriam!
                </h2>
            </div>
        </div>

    )
}

export default ShowSeat;