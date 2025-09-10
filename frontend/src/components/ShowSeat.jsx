import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShowSeat = () =>{
    const location = useLocation()
    const navigate = useNavigate()

    const {name, table} = location.state || {};
    return(

        <div className="flex flex-col items-center p-6">
            <h1>SHOW SEAT</h1>
            <h1>
                {name}
            </h1> <br/>
            <h2>
                Locul tau este la masa {table}
            </h2> <br/>
            <button onClick={() =>navigate("/")}>
                INAPOI
            </button>
        </div>

    )
}

export default ShowSeat;