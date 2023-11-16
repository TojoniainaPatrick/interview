import axios from "../../../apiCall/axios";
import { useEffect, useState } from "react";

export default function CommentItem({comment}){

    const { commentText, commentID } = comment;
    const [ commentResponses, setCommentResponses ] = useState([]);
    const [ responseText, setResponseText ] = useState('')

    // get comment response
    const getCommentResponses = async(commentID)=>{
        await axios(`commentresponse/comment/${commentID}`)
        .then((response)=>{
            setCommentResponses(response.data.data)
        })
        .catch((error)=>{
            setCommentResponses([]);
            console.log(error)
        })
    }

    // add new response
    const addResponse = async(responseText, commentID)=>{
        await axios.post('/commentresponse/create', {responseText, commentID})
        .then((response)=>{
            getCommentResponses(commentID);
            setResponseText('')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getCommentResponses(commentID);
    }, [])

    return(
        <div>
            <div>{ commentText }</div>
            <div>
                <input 
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
            <div>
                {
                    commentResponses.map((response, key) =>
                        <div key={key}>
                            {response.responseText}
                        </div>
                    )
                }
            </div>
        </div>
    )
}