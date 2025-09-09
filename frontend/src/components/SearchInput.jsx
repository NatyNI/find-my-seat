import { useState, useEffect } from "react"
import axios from "axios";
import Fuse from 'fuse.js'


const SearchInput = () =>{

    const [searchName, setSearchName] = useState('')
    const [dataDB, setDataDB] = useState([])
    const [sugestions, setSugestions] = useState ([])


    useEffect(() => {
            axios.get(`http://127.0.0:8000/search?`)
                .then(response =>{
                    setDataDB(response.data)
                })
        },[]);
    
    useEffect(() => {
        const normalizedSearch = normalizeInput(searchName);
    
        if (normalizedSearch.length >= 3) {
          const results = fuse.search(normalizedSearch);
          const filtered = results.map(result => result.item);
          setSugestions(filtered);
        }
      }, [searchName]);    

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
   

    return (

        <div className="flex flex-col items-center" >
        
            <h3 
                className="p-5">
                Introdu numele tau
            </h3>
            <h1>
                {searchName}
            </h1>
            <input 
                type="text"
                placeholder="Cauta..."
                onChange= {(e) => setSearchName(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            {sugestions.map((item, index) =>
                <div key={index}>
                  <h2>
                    {item.name}
                  </h2> 
                  <h2>
                    {item.table}
                  </h2>
                </div>
                )}
           
        </div>
        
    );
};

export default SearchInput;