import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TargetContainer from "../components/target/TargetContainer";

export default function Target(){
    return(
        <div className = "target-page">

            <div className = "page-title">
                <i> <FontAwesomeIcon icon = { faCheckToSlot } /> </i>
                <span> Analyse d'atteinte d'objectif</span>
            </div>

            <div className = "target-data-container">
                <TargetContainer />
            </div>
        </div>
    )
}