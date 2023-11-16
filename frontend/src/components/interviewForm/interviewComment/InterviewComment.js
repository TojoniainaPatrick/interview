import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../apiCall/axios';
import CommentItem from './CommentItem';

export default function InterviewComment(){

    const { itrwID } = useParams();
    const [ interviewsComments, setInterviewComments ] = useState([]);
    const [ newComment, setNewComment ] = useState('');

    // get interview comments
    const getInterviewComments = async(interviewID) =>{
        await axios(`/comment/interview/${interviewID}`)
        .then((response)=>{
            setInterviewComments(response.data.data);
        })
        .catch((error)=>{
            setInterviewComments([]);
            console.log(error)
        })
    }

    // add comment
    const addComment = async(interviewID, commentText)=>{
        await axios.post('/comment/create', {interviewID, commentText})
        .then((response)=>{
            getInterviewComments(itrwID);
            setNewComment('')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getInterviewComments(itrwID);
    },[])

    return(
        <div>
            <h1>Interview comments</h1>
            <div>
                {
                    interviewsComments.map((comment, key)=>
                        <CommentItem key={key} comment={comment}/>
                    )
                }
            </div>
            <div>
                <input 
                    type='text'
                    placeholder='Commentaire'
                    onChange={e=>setNewComment(e.target.value)}
                    value={newComment}
                />
                <button
                    onClick={()=>addComment(itrwID, newComment)}
                >
                    Commenter
                </button>
            </div>
        </div>
    )
}