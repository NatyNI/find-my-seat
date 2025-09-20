import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShowSeat = () =>{
    const location = useLocation()
    const navigate = useNavigate()

    const {name, table, kids} = location.state || {};
    return(

        <div className="flex flex-col items-center p-6">
            <h1 className="border-t-2 border-b-2 rounded border-gray-500 text-lg font-bold">
                {name}
            </h1> <br/>
            <h2>
                Locul dumneavoastră este la
            </h2>
            <h2 className="text font-bold text-lg bg-gray-300 border rounded">
                masa {table} 🍽️
            </h2> <br/>
            <h2>
                {kids}
            </h2> <br/>
            <img
                src={`/images/${table}.png`}
            /> <br/>
            <button onClick={() =>navigate("/")}>
                INAPOI LA CAUTARE
            </button>
        </div>

    )
}

export default ShowSeat;