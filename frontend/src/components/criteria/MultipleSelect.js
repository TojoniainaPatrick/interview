import React, { useState } from "react";
import Select from "react-select";

export default function MultipleSelect(){

    const defaultSelectedOptions = [
        {id: 1, name: 'poste 1', opt: "opt1"},
        {id: 3, name: 'poste 3', opt: "opt2"}
    ];

    const [ selectedOptions, setSelectedOptions ] = useState(defaultSelectedOptions);

    const handleSelectChange = (selectedValues) =>{
        setSelectedOptions(selectedValues)
    }

    const handleSubmit = ()=>{
        console.log(selectedOptions)
    }

    return(
        <>
            <Select
                isMulti
                options = {[
                    {id: 1, name: 'poste 1', opt: 'opt1'},
                    {id: 2, name: 'poste 2', opt: 'opt2'},
                    {id: 3, name: 'poste 3', opt: 'opt3'},
                    {id: 4, name: 'poste 1', opt: 'opt4'},
                    {id: 5, name: 'poste 2', opt: 'opt5'},
                    {id: 6, name: 'poste 3', opt: 'opt6'}
                ]}
                getOptionValue={ (option)=> option.id }
                getOptionLabel={ (option)=> option.name }
                value = { selectedOptions }
                onChange = { handleSelectChange }
                placeholder = 'Choisir poste ...'
            />

            <button onClick={handleSubmit}>Soumettre</button>
        </>
    )
}