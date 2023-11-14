import React, { useState } from "react";

export default function SearchComponent({ data }){

    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResults, setSearchResults ] = useState(data);

    const handleSearch = (e)=>{
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filteredData = data.filter((item) => 
            Object.values(item).some((value) =>
                value.toString().toLowerCase().includes(term)
            )
        )

        setSearchResults(filteredData);
    };

    return(
        <div>
            <input
                type="search"
                placeholder="Recherche ..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {
                    searchResults.map((item, key) =>
                        <li key={key}>{ item.name }</li>
                    )
                }
            </ul>
        </div>
    );
};