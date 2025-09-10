import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import Fuse from 'fuse.js'


const SearchInput = () =>{
    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState('')
    const [dataDB, setDataDB] = useState([])
    const [sugestions, setSuggestions] = useState ([])
    const [selectedName, setSelectedName] = useState('')
    const [receiveTable, setReceiveTable] = useState('')


    useEffect(() => {
            axios.get(`/api/search`)
                .then(response =>{
                    setDataDB(response.data)
                })
        },[]);
    
    useEffect(() => {
        const normalizedSearch = normalizeInput(inputValue);
    
        if (normalizedSearch.length >= 3) {
          const results = fuse.search(normalizedSearch);
          const filtered = results.map(result => result.item);
          setSuggestions(filtered);
        } else {
            setSuggestions([])
        }
      }, [inputValue]);    

    function normalizeInput(inpNames) {
        return inpNames
            .normalize('NFD')
            .replace(/\p{Diacritic}/gu, '')
            .trim()
            .replace(/\s+/g, ' ')
            .toLowerCase();
    }

    const fuse = new Fuse(dataDB, {
        keys: ['name'],
        threshold: 0.2,
        ignoreLocation: true,
        useExtendedSearch: true,
      });

    const receiveNameAndTable = (name, table) => {
        setInputValue(name)
        setReceiveTable(table)
        navigate("/show-seat", {
            state: {name, table}
        });
    };
   

    return (

        <div className="flex flex-col items-center" >
        
            <h3 
                className="p-5">
                Introdu numele tau
            </h3>
            <h1>
                {inputValue}
            </h1>
            <h1>
                {receiveTable}
            </h1>
            <input 
                type="text"
                placeholder="Cauta..."
                value = {inputValue}
                onChange= {(e) => setInputValue(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            /> <br/>
            
            {sugestions.map((item, index) =>
                <div key={index}
                     className="p-2 w-full flex flex-col items-center"
                >
                    <ul>
                        <li onClick= {() => receiveNameAndTable(item.name, item.table) }>
                            {item.name}
                        </li>
                    </ul>
                    
                   
                  
                  <h2>
                    
                  </h2>
                </div>
                )}
           
        </div>
        
    );
};

export default SearchInput;