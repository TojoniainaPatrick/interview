import useCustomeContext from "../../context/useCustomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import YearItem from "./YearItem";
import { useState } from "react";
import axios from "../../apiCall/axios";
import { toast } from 'react-toastify';

export default function YearContainer(){

    const {
        years,
        fetchYears,
        fetchPeriods,
        fetchInterviews,
    } = useCustomeContext();

    const createYear = async()=>{
        await axios.post('/year/new')
        .then((response)=>{
            showSuccesMessage();
            fetchYears();
            fetchPeriods();
            fetchInterviews();
        })
        .catch((error)=>{console.log(error)})
    }

    
    const showSuccesMessage = ()=>{
        toast.success("Operation effectuée avec succès !", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const showErrorMessage = ()=>{
        toast.error("Une erreure s'est produite!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    return(
        <div className="year-container">

            <span className="container-title"> Périodes </span>

            <div className="year-container-header">
                <button onClick={createYear}>
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