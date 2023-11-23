import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../apiCall/axios';
import CommentItem from './CommentItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
        <div className='interview-comment-container'>

            <span className='page-title'>Liste des commentaires</span>

            <div className='interview-comment-stat'>
                <span>Commentaires</span>
                <span>Commentaires</span>
                <span>Commentaires</span>
            </div>

            <div className='comment-data-container'>
                {
                    interviewsComments.map((comment, key)=>
                        <CommentItem 
                            key={key} 
                            comment={comment}
                        />
                    )
                }
            </div>

            <div className='comment-input-container'>
                <input 
                    type='text'
                    placeholder='Commentaire'
                    onChange={e=>setNewComment(e.target.value)}
                    value={newComment}
                />
                <button
                    onClick={()=>addComment(itrwID, newComment)}
                >
                    <i> <FontAwesomeIcon icon = { faPaperPlane} /> </i>
                </button>
            </div>
        </div>
    )
}