import { useState } from "react";
import { Link } from 'react-router-dom';

export default function InterviewItem({ interview }){

    return(
        <div className="interview-item">

            <div className="interview-detail">
                <span>{`${interview.yooYear} ${interview.perName}`}</span>
                <span>{`${interview.userName} ${interview.userLastName}`}</span>
                <span>{interview.posName}</span>
                <span>{interview.itrwStatus}</span>
            </div>
            

            <div className="link-container">
                <Link to = {`/interview/interviewForm/${interview.itrwID}/scal`}>Grille d'évaluation</Link>
                <Link to = {`/interview/interviewForm/${interview.itrwID}/target`}>Objectif(s)</Link>
                <Link to = {`/interview/interviewForm/${interview.itrwID}/question`}>Question(s)</Link>
                <Link to = {`/interview/interviewForm/${interview.itrwID}/comment`}>Commentaite(s)</Link>
            </div>

        </div>
    )
}