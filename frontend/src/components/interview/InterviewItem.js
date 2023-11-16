import { useState } from "react";
import { Link } from 'react-router-dom';

export default function InterviewItem({ interview }){

    return(
        <div className="interview-item">

            <span>{interview.yooYear}</span>
            <span>{interview.perName}</span>
            <span>{`${interview.userName} ${interview.userLastName}`}</span>
            <span>{interview.posName}</span>
            <span>{interview.itrwStatus}</span>

            <Link to = {`/interview/interviewForm/${interview.itrwID}/scal`}>Grille d'évaluation</Link>
            <Link to = {`/interview/interviewForm/${interview.itrwID}/target`}>Objectif(s)</Link>
            <Link to = {`/interview/interviewForm/${interview.itrwID}/question`}>Question(s)</Link>
            <Link to = {`/interview/interviewForm/${interview.itrwID}/comment`}>Commentaite(s)</Link>

        </div>
    )
}