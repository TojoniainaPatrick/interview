import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../../apiCall/axios";
import { useEffect, useState } from "react";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import useCustomeContext from '../../../context/useCustomeContext'

export default function CommentItem({comment}){

    const { commentText, commentID } = comment;
    const [ commentResponses, setCommentResponses ] = useState([]);
    const [ responseText, setResponseText ] = useState('');
    const [ editResponse, setEditResponse ] = useState(false)

    const {
        load,
        unLoad
    } = useCustomeContext()

    // get comment response
    const getCommentResponses = async(commentID)=>{
        load();
        await axios(`commentresponse/comment/${commentID}`)
        .then((response)=>{
            setCommentResponses(response.data.data)
        })
        .catch((error)=>{
            setCommentResponses([]);
            console.log(error)
        })
        .finally(() => unLoad())
    }

    // add new response
    const addResponse = async(responseText, commentID)=>{
        load();
        await axios.post('/commentresponse/create', {responseText, commentID})
        .then((response)=>{
            getCommentResponses(commentID);
            setEditResponse(false);
            setResponseText('');
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(() => unLoad())
    }

    // component did mount
    useEffect(()=>{
        getCommentResponses(commentID);
    }, [])


    // close backdrop
    const closeBackdrop = () => {
        setEditResponse(false);
    }

    // open backdrop
    const openResponseInput = () =>{
        setEditResponse(true);
    }

    const responseInputClass = editResponse ? "comment-response-input-container shown" : "comment-response-input-container hidden"

    return(
        <>
            {
                editResponse && 
                <div className="comment-response-backdrop" onClick={ closeBackdrop }></div>
            }

            <div className="comment-item-container">

                <div className="comment-container">

                    <div className="comment-text">
                        <p>{ commentText }</p>
                    </div>

                    <div className="action-button" onClick={openResponseInput}>
                        <i> <FontAwesomeIcon icon={faReply} /> </i>
                        <span>Répondre</span>
                    </div>

                    <div className={responseInputClass}>
                        
                        <textarea 
                            type="text" 
                            placeholder="Reponse" 
                            value={responseText}
                            onChange={e=>setResponseText(e.target.value)}
                        />

                        <button
                            onClick={()=>addResponse(responseText, commentID)}
                        >
                            Repondre
                        </button>

                    </div>

                </div>

                <div className="comment-response-container">
                    {
                        commentResponses.map((response, key) =>
                            <div key={key} className="response-text">
                                <p>{response.responseText}</p>
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    )
}