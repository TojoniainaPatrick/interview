import useCustomeContext from "../../context/useCustomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import YearItem from "./YearItem";
import { useState } from "react";

export default function YearContainer(){

    const {
        years
    } = useCustomeContext();

    return(
        <div className="year-container">

            <span className="container-title"> Périodes </span>

            <div className="year-container-header">
                <button>
                    <FontAwesomeIcon icon = { faPlus } />
                    <span>Nouvelle année</span>
                </button>
            </div>

            <div className="year-data-container">
                {
                    years.map( (year, key) =>
                        <YearItem 
                            year={year} 
                            key={key}
                        />
                    )
                }
            </div>
        </div>
    )
}