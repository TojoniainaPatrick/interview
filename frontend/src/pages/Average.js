import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import AverageContainer from "../components/average/AverageContainer";

export default function Averaga(){
    return (
        <div className = "average-page">

            <div className = "page-title">
                <i> <FontAwesomeIcon icon = { faBarChart } /> </i>
                <span> Moyenne générale</span>
            </div>

            <div className = "average-data-container">
                <AverageContainer />
            </div>

        </div>
    )
}