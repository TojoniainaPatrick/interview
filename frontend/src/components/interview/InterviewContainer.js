import useCustomeContext from "../../context/useCustomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InterviewItem from "./InterviewItem";
import { useEffect, useState } from "react";

export default function InterviewContainer(){

    const {
        interviews,
        currentPeriod,
        currentYear,
        getCurrentYear,
        getCurrentPeriod
    } = useCustomeContext();

    useEffect(() => {
        getCurrentPeriod();
        getCurrentYear();
    }, [])

    const [ searchTerm, setSearchTerm ] = useState('');

    const currentYearInterviews     = currentYear   === null ? interviews               : interviews.filter(interview => parseInt(interview.yooID) === parseInt(currentYear));
    const currentPeriodInterviews   = currentPeriod === null ? currentYearInterviews    : currentYearInterviews.filter(interview => parseInt(interview.perID) === parseInt(currentPeriod));

    const filteredData = currentPeriodInterviews.filter(interview => 
        interview.userName.toString().toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        interview.userLastName.toString().toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        interview.posName.toString().toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())  
    )

    return(
        <>
            <div className="interview-container">

                <span className="container-title"> Liste des fiches d'évaluation</span>

                <div className="interview-container-header">
                    <div className="search-pad-container">
                        <i><FontAwesomeIcon icon = { faSearch } /></i>
                        <input type="search" placeholder="Recherche" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}/>
                    </div>
                </div>

                <div className="interview-container-data">
                    {
                        filteredData.map((interview, key)=>
                            <InterviewItem key={key} interview={interview}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}