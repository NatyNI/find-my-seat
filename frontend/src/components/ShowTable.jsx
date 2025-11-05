import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShowTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, table, kids } = location.state || {};
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.0:8000/get-image", {
        params: { name: table },
        responseType: "blob",
      })
      .then((response) => {
        const url = URL.createObjectURL(response.data);
        setImageUrl(url);
      })
      .catch((error) => {
        console.error("Eroare la cererea imaginii:", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-300 p-1">
      <h1 className="mt-5 rounded border-b-2 border-t-2 border-gray-500 text-lg font-bold">
        {name}
      </h1>
      <h2 className="mt-2 text-lg italic">Locul dumneavoastră este la</h2>
      <h2 className="text rounded border bg-gray-400 p-0.5 text-lg font-bold">
        🍽️ masa {table}
      </h2>
      <h2 className="pl-4 pt-1 text-red-500">{kids}</h2>
      <img
        className="p- h-[510px] w-[340px] pb-10"
        src={imageUrl}
        alt="Plan tables"
      />
      <button
        onClick={() => navigate("/")}
        className="fixed bottom-3 rounded-lg border-2 border-black bg-gradient-to-l from-gray-600 via-gray-500 to-gray-400 p-1 p-1.5 text-xs font-bold text-white"
      >
        ÎNAPOI LA CĂUTARE
      </button>{" "}
      <br />
    </div>
  );
};

export default ShowTable;
