import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import axios from '../../../apiCall/axios';
import { useEffect, useState } from "react";
import useCustomeContext from '../../../context/useCustomeContext';

export default function CriteriaCard(){

    const [ criteria, setCriteria ] = useState([]);

    const {
        load,
        unLoad
    } = useCustomeContext()

    const getCriteria = async() => {
        load();
        await axios('evaluationItem')
        .then((response) => {
            setCriteria(response.data.data);
        })
        .catch((error) => {
            setCriteria([]);
            console.log(error);
        })
        .finally(() => unLoad())
    };

    useEffect(() => {
        getCriteria();
    }, [])

    const activriteria      = criteria.filter( criterion => parseInt(criterion.evaStatus) == 1).length;
    const criteriaNumber    = criteria.length;

    return(
        <div className="dashboard-card">

            <div className = "card-icon-container">
                <i className="criteria-icon"> <FontAwesomeIcon icon = { faListUl } /></i>
            </div>

            <div className = "card-info-container">
                <span className="title-card">Critères d'évaluation</span>
                <span className="number-card">{`Actifs ${activriteria}/${criteriaNumber}`}</span>
            </div>

        </div>
    )
}