import axios from "../../../apiCall/axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faReply, faRemove } from "@fortawesome/free-solid-svg-icons";

export default function QuestionItem({question, getQuestions}){

    const { questionText, questionID, response } = question;
    const [ answer, setAnswer ] = useState('');

    const [ showQuestionMenu, setShowQuestionMenu ] = useState(false);
    const [ showResponseMenu, setShowResponseMenu ] = useState(false);
    const [ updateQuestion, setUpdateQuestion ] = useState(false);
    const [ updateResponse, setUpdateResponse ] = useState(false);
    const [ editResponse, setEditResponse ] = useState(false);


    // respond question
    const respond = async(questionID, response) => {
        axios.put(`/question/respond/${questionID}`, {response})
        .then((response)=>{
            getQuestions();
            closeAll();
            setAnswer('');
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const questionActionClass = showQuestionMenu ? "action-button shown" : "action-button question hidden";

    const responseActionClass = showResponseMenu ? "action-button shown" : "action-button response hidden";

    const closeAll = ()=>{
        setShowQuestionMenu(false);
        setShowResponseMenu(false);
        setEditResponse(false);
        setUpdateQuestion(false);
        setUpdateResponse(false);
    }

    return(
        <>
            {
                ( showQuestionMenu || showResponseMenu || updateQuestion || updateResponse || editResponse ) &&
                <div className="question-backdrop" onClick={closeAll}></div>
            }
            <div className="question-item-container">

                <div className="question-container">

                    <div className="question-text" onClick={()=>setShowQuestionMenu(true)}>
                        <p>{ questionText }</p>
                        {/* <input type="text" value={questionText} /> */}
                    </div>

                    <div>
                        <button className={ questionActionClass }>
                            <FontAwesomeIcon icon={faEdit} />
                            <span className="btn-title">Modifier</span>
                        </button>
                        <button className={ questionActionClass }>
                            <FontAwesomeIcon icon={faRemove} />
                            <span className="btn-title">Supprimer</span>
                        </button>
                        {
                            response === null &&
                            <button className={ questionActionClass } onClick={()=>setEditResponse(true)}>
                                <FontAwesomeIcon icon={faReply} />
                                <span className="btn-title">Répondre</span>
                            </button>
                        }
                    </div>

                    <div className={(updateResponse || editResponse ) ? "response-input-container shown":"response-input-container hidden"}>
                        <textarea 
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

                </div>

                <div className="response-container">
                    {
                        response !== null &&
                        <>
                            <div>
                                <button className={ responseActionClass }>   
                                    <FontAwesomeIcon icon={faEdit} />
                                    <span className="btn-title">Modifier</span>
                                </button>
                                <button className={ responseActionClass }>
                                    <FontAwesomeIcon icon={faRemove} />
                                    <span className="btn-title">Supprimer</span>
                                </button>
                            </div>
                            <div className="response-text" onClick={()=>setShowResponseMenu(true)}>
                                <p>{ response }</p>
                            </div>
                        </>
                    }
                </div>


                
            </div>
        </>
    )
}