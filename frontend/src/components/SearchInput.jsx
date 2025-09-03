import { useState, useEffect } from "react"
import axios from "axios";


const SearchInput = () =>{

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const liveInput=(e)=>{
        setSearchValue(e.target.value)
    };

    useEffect(() => {
        if (searchValue.length >= 3) {
            axios.get(`http://127.0.0.1:8000/search?q=${searchValue}`)
                .then(response =>{
                    setSearchResult(response.data)
                })
        }
        },[searchValue]);


    return (
        <div className="flex flex-col items-center" >
            
            {searchResult.map((item, index) =>
                <div key={index}>
                  <h2>
                    {item.name}
                    {item.table}
                  </h2> 
                </div>
                )}
            
            <h3 
                className="p-5">
                Introdu numele tau
            </h3>
            <h1>
                {searchValue}
            </h1>
            <input 
                type="text"
                placeholder="Cauta..."
                onChange={liveInput}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
           
        </div>
        
    );
};

export default SearchInput;