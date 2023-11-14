import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import EvaluationContainer from '../components/criteria/EvaluationContainer';
import Section from '../components/criteria/Section';

export default function Criteria(){
    return(
        <div className = "criteria-page">
            <div className = "page-title">
                <i> <FontAwesomeIcon icon = { faListUl } /></i>
                <span>Critere d'evaluation</span>
            </div>
            <div className = "criteria-data-container">
                <EvaluationContainer />
                <Section />
            </div>
        </div>
    )
}