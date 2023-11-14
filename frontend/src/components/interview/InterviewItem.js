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

            <Link>Grille d'évaluation</Link>
            <Link>Objectif(s)</Link>
            <Link>Question(s)</Link>
            <Link>Commentaite(s)</Link>

        </div>
    )
}