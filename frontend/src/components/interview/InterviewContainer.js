import useCustomeContext from "../../context/useCustomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InterviewItem from "./InterviewItem";

export default function InterviewContainer(){

    const {
        interviews
    } = useCustomeContext();
    return(
        <>
            <div className="interview-container">

                <span className="container-title"> Liste des fiches d'évaluation</span>

                <div className="interview-container-header">
                    <div className="search-pad-container">
                        <i><FontAwesomeIcon icon = { faSearch } /></i>
                        <input type="search" placeholder="Recherche"/>
                    </div>
                </div>

                <div className="interview-container-data">
                    {
                        interviews.map((interview, key)=>
                            <InterviewItem key={key} interview={interview}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}