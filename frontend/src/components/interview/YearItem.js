import useCustomeContext from "../../context/useCustomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function YearItem({ year }){

    const {
        getYearPeriods,
        currentYear,
        setCurrentYear,
        currentTrimestre,
        setCurrentTrimestre,
        getCurrentYearID,
        getCurrentTrimestreID
    } = useCustomeContext();

    const currentPeriods = getYearPeriods(year.yooID);
    const currentYearID = getCurrentYearID();
    const currentTrimestreID = getCurrentTrimestreID();

    useEffect(()=>{
        setCurrentYear(currentYearID);
        setCurrentTrimestre(currentTrimestreID);
        console.log();
    },[])

    const chooseYear = ()=>{
        if(parseInt(currentYear) === parseInt(year.yooID)) { setCurrentYear(null); }
        else { setCurrentYear(year.yooID); }
    };

    const chooseTrimestre = (perID)=>{
        setCurrentTrimestre(perID);
    }

    const yearItemClass = parseInt(currentYear) === parseInt(year.yooID) ? "year-item expanded" : "year-item collapsed";

    const trimestreItemClass = (perID)=>{
        return parseInt(currentTrimestre) === parseInt(perID) ? "trimestre-item current" : "trimestre-item notcurrent";
    }

    return(
        <div className= { yearItemClass }>

            <div className="yoo-year" onClick={chooseYear}>
                <span>{year.yooYear}</span>
                <span className="i">
                    <i><FontAwesomeIcon icon={faAngleDown}/></i>
                </span>
            </div>

            {
                currentPeriods.map( (period, key) =>
                    <span 
                        key={key} 
                        className={trimestreItemClass(period.perID)}
                        onClick={()=>{chooseTrimestre(period.perID)}}
                    >
                        {period.perName}
                    </span>
                )
            }
        </div>
    )
}