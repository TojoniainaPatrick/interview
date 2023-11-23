import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimeline } from "@fortawesome/free-solid-svg-icons";
import axios from '../../../apiCall/axios';
import { useEffect, useState } from "react";

export default function PeriodCard(){

    const defaultCurrentYear = new Date().getFullYear();
    const [ currentYear, setCurrentYear ] = useState(defaultCurrentYear);
    const [ currentPeriod, setCurrentPeriod ] = useState('');

    const getCurrentYear = async() => {
        await axios('/year/current')
        .then((response) => {
            setCurrentYear(response.data.data.yooYear);
        })
        .catch((error) => {
            setCurrentYear(defaultCurrentYear);
            console.log(error);
        })
    };

    const getCurrentPeriod = async() => {
        await axios('/period/current')
        .then((response) => {
            setCurrentPeriod(response.data.data.perName);
        })
        .catch((error) => {
            setCurrentPeriod('');
            console.log(error);
        })
    };

    useEffect(() => {
        getCurrentYear();
        getCurrentPeriod();
    }, [])


    return(
        <div className="dashboard-card">

            <div className = "card-icon-container">
                <i className="period-icon"> <FontAwesomeIcon icon = { faTimeline } /></i>
            </div>

            <div className = "card-info-container">
                <span className="title-card"> Période en cours </span>
                <span className="number-card">{` ${currentYear} ${currentPeriod}`}</span>
            </div>

        </div>
    )
}