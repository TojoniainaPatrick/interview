import React, { useState } from "react";
import Select from 'react-select';

export default function SingleSelect(){

    const [ selectedOption, setSelectedOption ] = useState(null);

    const handleSelectChange = (selectedValue)=>{
        setSelectedOption(selectedValue)
    }

    const handleSubmit = ()=>{
        console.log(selectedOption)
    }

    return(
        <>
            <Select
                options={[
                    {value: '1', label: 'one'},
                    {value: '2', label: 'two'},
                    {value: '3', label: 'three'},
                ]}
                onChange={ handleSelectChange }
            />
            <button
                onClick={handleSubmit}
            >
                Submit
            </button>
        </>
    )
}


