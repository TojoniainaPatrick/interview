import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import axios from '../../../apiCall/axios';
import { useEffect, useState } from "react";

export default function TargetCard(){

    const [ targets, setTargets ] = useState([]);

    const getTargets = async() => {
        await axios('target')
        .then((response) => {
            setTargets(response.data.data);
        })
        .catch((error) => {
            setTargets([]);
            console.log(error);
        })
    };

    useEffect(() => {
        getTargets();
    }, [])

    const reachedTarget      = targets.filter( target => parseInt(target.trgIsAccomplished) == 1).length;
    const targetNumber    = targets.length;

    return(
        <div className="dashboard-card">

            <div className = "card-icon-container">
                <i className="target-icon"> <FontAwesomeIcon icon = { faCheckToSlot } /></i>
            </div>

            <div className = "card-info-container">
                <span className="title-card">Objectifs atteints</span>
                <span className="number-card">{`${reachedTarget}/${targetNumber}`}</span>
            </div>

        </div>
    )
}