import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import axios from '../../../apiCall/axios';
import { useEffect, useState } from "react";
import useCustomeContext from '../../../context/useCustomeContext';

export default function QuestionCard(){

    const [ questions, setQuestions ] = useState([]);

    const {
        load,
        unLoad
    } = useCustomeContext()

    const getQuestions = async() => {
        load()
        await axios('question')
        .then((response) => {
            setQuestions(response.data.data);
        })
        .catch((error) => {
            setQuestions([]);
            console.log(error);
        })
        .finally(() => unLoad())
    };

    useEffect(() => {
        getQuestions();
    }, [])

    const repliedQuestion      = questions.filter( question => parseInt(question.isReplied) == 1).length;
    const questionNumber    = questions.length;

    return(
        <div className="dashboard-card">

            <div className = "card-icon-container">
                <i className="question-icon"> <FontAwesomeIcon icon = { faCircleQuestion } /></i>
            </div>

            <div className = "card-info-container">
                <span className="title-card">Questions répondues</span>
                <span className="number-card">{`${repliedQuestion}/${questionNumber}`}</span>
            </div>

        </div>
    )
}