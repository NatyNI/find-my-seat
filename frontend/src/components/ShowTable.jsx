import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
s;
const ShowTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, table, kids } = location.state || {};

  return (
    <div className="flex flex-col items-center p-1">
      <h1 className="mt-5 animate-bounce rounded border-b-2 border-t-2 border-gray-500 text-lg font-bold">
        {name}
      </h1>
      <h2 className="mt-2 text-lg italic">Locul dumneavoastră este la</h2>
      <h2 className="text rounded border bg-gray-300 p-0.5 text-lg font-bold">
        🍽️ masa {table}
      </h2>
      <h2 className="pt-1">{kids}</h2>
      <img
        className="h-[510px] w-[340px] p-3 pb-10 pt-2"
        src={"https://findmyseat.website/static/images/last1.png"}
        alt="Plan tables"
      />
      <button
        onClick={() => navigate("/")}
        className="fixed bottom-3 rounded-lg border-2 border-black bg-gradient-to-l from-gray-600 via-gray-500 to-gray-400 p-1 p-1.5 text-xs font-bold text-white"
      >
        ÎNAPOI LA CĂUTARE
      </button>{" "}
      <br />
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
  );
};

export default ShowTable;
