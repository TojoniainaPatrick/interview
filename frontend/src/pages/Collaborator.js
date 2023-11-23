import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import CollaboratorContainer from "../components/collaborator/CollaboratorContainer";

export default function Collaborator(){
    return (
        <div className = "collaborator-page">

            <div className="page-title">
                <i> <FontAwesomeIcon icon = { faUsers } /></i>
                <span> Collaborateur </span>
            </div>

            <div className="collaborator-data-container">
                <CollaboratorContainer />
            </div>
        </div>
    )
}