import { useParams } from "react-router-dom";
import axios from "../../../apiCall/axios";
import { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

export default function InterviewQuestion(){

    const { itrwID } = useParams();
    const [ interviewQuestions, setInterviewQuestions ] = useState([]);
    const [ newQuestion, setNewQuestion ] = useState({
        interviewID: itrwID,
        questionText: ''
    })

    // fetch inteview questions
    const fetchInterviewQuestions = async(interviewID) =>{
        await axios(`/question/interview/${itrwID}`)
        .then((response)=>{
            setInterviewQuestions(response.data.data)
        })
        .catch((error)=>{
            setInterviewQuestions([]);
            console.log(error)
        })
    };

    // add question
    const addQuestion = async()=>{
        await axios.post('/question/create', newQuestion)
        .then((response)=>{
            fetchInterviewQuestions(itrwID);
            setNewQuestion({...newQuestion, questionText: ''})
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // handle inputs
    const handleInput = (e)=>{
        setNewQuestion({...newQuestion, [e.target.id]: e.target.value})
    };

    useEffect(()=>{
        fetchInterviewQuestions(itrwID);
    },[])

    return(
        <div>
            <div>
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

            <div>
                <input 
                    type="text" 
                    placeholder="Nouvelle question"
                    id="questionText" 
                    value={newQuestion.questionText}
                    onChange={handleInput}
                />
                <button onClick={addQuestion}>Envoyer</button>
            </div>
        </div>
    )
}