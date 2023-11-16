import axios from "../../../apiCall/axios";
import { useState } from "react";

export default function QuestionItem({question, getQuestions}){

    const { questionText, questionID, response } = question;
    const [ answer, setAnswer ] = useState('');

    // respond question
    const respond = async(questionID, response)=>{
        axios.put(`/question/respond/${questionID}`, {response})
        .then((response)=>{
            getQuestions();
            setAnswer('');
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <div>
            <span>{ questionText }</span>
            <span>{ response }</span>
            {
                response === null &&
                <div>
                    <input 
                        type="text" 
                        placeholder="Reponse"
                        onChange={e=>setAnswer(e.target.value)}
                        value={answer}
                    />
                    <button
                        onClick={()=>respond(questionID, answer)}
                    >
                        Repondre
                    </button>
                </div>
            }
        </div>
    )
}