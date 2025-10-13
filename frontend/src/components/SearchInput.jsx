import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Fuse from 'fuse.js';


const SearchInput = () =>{
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState('');
    const [dataDB, setDataDB] = useState([]);
    const [sugestions, setSuggestions] = useState ([]);
    const [receiveTable, setReceiveTable] = useState('');
    const [warningIncorectInput, setWarningIncorectInput] = useState('');
    

    //Request to API
    useEffect(() => {
            axios.get(`/api/search`)
                .then(response =>{
                    setDataDB(response.data);
                });
        },[]);
    
    //Make sugestions for the input, at least 3 letters in input
    useEffect(() => {
        const normalizedSearch = normalizeInput(inputValue);
    
        if (normalizedSearch.length >= 3) {
          const results = fuse.search(normalizedSearch);
          const filtered = results.map(result => result.item);
          setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
      }, [inputValue]);    

    //Remove diacritics, spaces, capital letters from input
    function normalizeInput(inpNames) {
        return inpNames
            .normalize('NFD')
            .replace(/\p{Diacritic}/gu, '')
            .trim()
            .replace(/\s+/g, ' ')
            .toLowerCase();
    };
    
    //Search in DB the name from input that have the most matching
    const fuse = new Fuse(dataDB, {
        keys: ['name'],
        threshold: 0.2,
        ignoreLocation: true,
        useExtendedSearch: true,
      });

    //Handle input when users click on the sugestion
    const onClickReceiveNameAndTable = (name, table, kids) => {
        setInputValue(name);
        setReceiveTable(table);
        navigate("/show-seat", {
            state: {name, table, kids}
        });
    };

    //Handle input when users click on they keyboard "Ok" or "Enter"
    const onKeyDownReceiveNameAndTable = (e) => {

        if (e.key === "Enter" ) {
            const inputValueOnKey = e.target.value.trim();

            const words = inputValueOnKey.split(/\s+/);
            const normalizedSearch = normalizeInput(inputValueOnKey);
            const results = fuse.search(normalizedSearch);
            const filtered = results.map(result =>result.item);
            
            //Check if input have 2 name
            if (words.length !== 2) {
                setWarningIncorectInput("Introdu Nume Prenume");
                return;
            };

            //Check if a name was filtered
            if (filtered.length === 0){
                setWarningIncorectInput("Introdu Nume Prenume valid");
                return;
            };

            //Check in name and surname have at least 4 letters in input
            const checkLenWord = (inputFromUser) =>{
                const splitWords = inputFromUser.split(/\s+/)
                const checkLenWords =(splitWords.map((name) => {
                    if (name.length < 4){
                        setWarningIncorectInput("Introdu Nume Prenume")
                        return;
                    };
                }));
            };

            //We move on the next page if all checks are TRUE
            const finalResult = (filtered.map((item) =>{
                checkLenWord(inputValueOnKey);
                const name = normalizeInput(item.name)
                if (normalizedSearch === name){
                    navigate("/show-seat", {
                        state: {name: item.name, table: item.table, kids: item.kids}
                    });   
                } else (setWarningIncorectInput("Introdu Nume Prenume"));     
            })); 

    }};
   

    return (

        <div className="mt-24 flex flex-col items-center top-0 ">
            
            {/* Top left corner */}
            <div className="absolute mt-[20px] left-4 w-6 h-6 border-t-4 border-l-4 border-green-500"></div>

            {/* Top right corner*/}
            <div className="absolute mt-[20px] right-4 w-6 h-6 border-t-4 border-r-4 border-green-500"></div>

            <h3 
                className="mt-7 text-xl font-bold ">
                Introdu numele tău
            </h3>
            <h3 className="text-sm">
                Începe cu numele de familie
            </h3>

            <h3 className="text-red-500 p-2 text-sm">
                {warningIncorectInput}
            </h3>
            <input 
                type="text"
                placeholder="Caută..."
                value = {inputValue}
                onChange= {(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => onKeyDownReceiveNameAndTable(e)}
                className="px-4 py-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
    
            <div className="max-h-[288px] w-full max-w-[215px] overflow-y-auto pr-1 ">
              {sugestions.map((item, index) =>
                <div key={index}
                     className="w-full p-1.5 border-l-2 border-r-2 border-green-500/60 rounded-md hover:bg-green-500/40 text-center font-bold"
                >
                  <ul>
                    <li onClick={() => onClickReceiveNameAndTable(item.name, item.table, item.kids)}>
                      {item.name}
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="fixed inset-0 -z-10 opacity-20">
                <img src="/images/bum.png" alt="A&M bumbac" className="w-full h-full object-cover translate-y-10" />
            </div>

            {/* Bottom left corner*/}
            <div className="absolute bottom-[90px] left-4 w-6 h-6 border-b-4 border-l-4 border-green-500"></div>

            {/* Bottom right corner*/}
            <div className="absolute bottom-[90px] right-4 w-6 h-6 border-b-4 border-r-4 border-green-500"></div>
        </div>
        
    );
};

export default SearchInput;
