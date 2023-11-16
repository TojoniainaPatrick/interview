import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../apiCall/axios";
import InterviewEvaluationItem from "./InterviewEvaluationItem";

export default function InterviewScal(){

    const { itrwID } = useParams();
    const [ interviewEvaluations, setInterviewEvaluations ] = useState([]);
    const [evaluations, setEvaluations] = useState([]);

    // Fonction pour mettre à jour les évaluations
    const updateEvaluations = (critereId, note) => {
        // Vérifier si l'identifiant du critère existe déjà dans les évaluations
        const existingIndex = evaluations.findIndex(item => item.critereId === critereId);

        // Si l'identifiant existe, mettre à jour la valeur
        if (existingIndex !== -1)
        {
            const updatedEvaluations = [...evaluations];
            updatedEvaluations[existingIndex] = { critereId, note };
            setEvaluations(updatedEvaluations);
        } 
        else 
        {
            // Sinon, ajouter une nouvelle évaluation
            setEvaluations(prevEvaluations => [...prevEvaluations, { critereId, note }]);
        }
    };

    // get interview evaluations
    const fetchInterviewEvaluations = async(interviewID)=>{
        await axios(`/interviewevaluation/interview/${interviewID}`)
        .then((response)=>{
            setInterviewEvaluations(response.data.data)
        })
        .catch((error)=>{
            setInterviewEvaluations([]);
            console.log(error)
        })
    }


    const handleSubmit = () =>{
        console.log(interviewEvaluations.length)
        console.log(evaluations.length)
    }

    useEffect(()=>{
        fetchInterviewEvaluations(itrwID);
    }, [])

    return (
        <div>
          <div>
            {interviewEvaluations.map(critere => (
                <InterviewEvaluationItem
                key={critere.evaID}
                critere={critere}
                onNoteClick={note => updateEvaluations(critere.evaID, note)}
                />
            ))}
          </div>
          <div>
            <button 
                onClick = {handleSubmit}
                disabled = { evaluations.length !== interviewEvaluations.length }
            >
                Envoyer
            </button>
          </div>
        </div>
    );
}
