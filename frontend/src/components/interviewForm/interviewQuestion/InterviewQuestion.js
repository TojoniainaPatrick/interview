import { useParams } from "react-router-dom";
import axios from "../../../apiCall/axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import QuestionItem from "./QuestionItem";
import useCustomeContext from '../../../context/useCustomeContext'

export default function InterviewQuestion(){

    const {
        load,
        unLoad
    } = useCustomeContext();

    const userData = JSON.parse(localStorage.getItem('userData'));
    const isHeadOfDepartment = userData.isHeadOfDepartment === 1;

    const { itrwID } = useParams();
    const [ interviewQuestions, setInterviewQuestions ] = useState([]);
    const [ newQuestion, setNewQuestion ] = useState({
        interviewID: itrwID,
        questionText: ''
    })

    // fetch inteview questions
    const fetchInterviewQuestions = async(interviewID) =>{
        load();
        await axios(`/question/interview/${itrwID}`)
        .then((response)=>{
            setInterviewQuestions(response.data.data)
        })
        .catch((error)=>{
            setInterviewQuestions([]);
            console.log(error)
        })
        .finally(() => unLoad())
    };

    // add question
    const addQuestion = async()=>{
        load();
        await axios.post('/question/create', newQuestion)
        .then((response)=>{
            fetchInterviewQuestions(itrwID);
            setNewQuestion({...newQuestion, questionText: ''})
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(() => unLoad())
    }

    // handle inputs
    const handleInput = (e)=>{
        setNewQuestion({...newQuestion, [e.target.id]: e.target.value})
    };

    useEffect(()=>{
        fetchInterviewQuestions(itrwID);
    },[])

    return(
        <div className="interview-question-container">

            <span className="page-title">Liste des questions</span>

            <div className="interview-question-stat">
                <span>Nombre de questions</span>
                <span>Nombre de questions</span>
            </div>

            <div className="question-data-container">
                {
                    interviewQuestions.map((question, key) =>
                        <QuestionItem 
                            key={key} 
                            question={question}
                            getQuestions = {()=>fetchInterviewQuestions(itrwID)}
                        />
                    )
                }
            </div>

            <div className="question-input-container">
                {
                    isHeadOfDepartment &&
                    <>
                        <input 
                            type="text" 
                            placeholder="Nouvelle question"
                            id="questionText" 
                            value={newQuestion.questionText}
                            onChange={handleInput}
                        />
                        <button onClick={addQuestion}>
                            <i> <FontAwesomeIcon icon={faPaperPlane} /> </i>
                        </button>
                    </>
                }
            </div>

        </div>
    )
}