import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import useCustomeContext from "../context/useCustomeContext";

import { useEffect } from "react";
import InterviewContainer from "../components/interview/InterviewContainer";
import YearContainer from "../components/interview/YearContainer";

export default function Interview() {

    const {
        fetchInterviews,
        fetchYears,
        fetchPeriods
    } = useCustomeContext();

    useEffect(()=>{
        fetchInterviews();
        fetchYears();
        fetchPeriods();
    },[])

    return(
        <div className = "interview-page">

            <div className="page-title">
                <i> <FontAwesomeIcon icon = { faFileAlt } /> </i>
                <span> Fiche d'évaluation </span>
            </div>

            <div className = "interview-data-container">
                <InterviewContainer />
                <YearContainer />
            </div>
        </div>
    )
}