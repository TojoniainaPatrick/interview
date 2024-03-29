import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../apiCall/axios";
import InterviewEvaluationItem from "./InterviewEvaluationItem";
import { toast } from 'react-toastify';
import useCustomeContext from '../../../context/useCustomeContext'

export default function InterviewScal(){

    const {
        load,
        unLoad
    } = useCustomeContext();

    const userData = JSON.parse(localStorage.getItem('userData'));
    const isHeadOfDepartment = userData.isHeadOfDepartment === 1;

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
        load();
        await axios(`/interviewevaluation/interview/${interviewID}`)
        .then((response)=>{
            setInterviewEvaluations(response.data.data)
        })
        .catch((error)=>{
            setInterviewEvaluations([]);
            console.log(error)
        })
        .finally(() => unLoad())
    }

    
    const showSuccesMessage = ()=>{
        toast.success("Opération effectuée avec succès !", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const showErrorMessage = ()=>{
        toast.error("Une erreure s'est produite!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const handleSubmit = () =>{
        load();
        axios.put('/interviewevaluation/updatevalue', {itrwID, evaluations})
        .then(response=>{
            showSuccesMessage();
            fetchInterviewEvaluations(itrwID);
        })
        .catch((error)=>{
            showSuccesMessage();
            console.log(error)
        })
        .finally(() => unLoad())
    }

    const handleCancel = () =>{
        setEvaluations([]);
    }

    useEffect(()=>{
        fetchInterviewEvaluations(itrwID);
    }, [])

    const groupesBySection = interviewEvaluations.reduce((accumulator, currentObject) => {
        const { secName, ...otherValues } = currentObject;
        accumulator[secName] = accumulator[secName] || [];
        accumulator[secName].push({...otherValues});
        return accumulator;
    }, {})

    return (
        <div className="interview-scal-container">

            <span className="page-title">Grille d'évaluation</span>

            <div className="interview-scal-stat">
                <span>Critères d'évaluation</span>
                <span>Critères d'évaluation</span>
                <span>Critères d'évaluation</span>
            </div>

            <div className="scal-data-container">
                {
                    Object.keys(groupesBySection).map((sectionName, key)=>
                        <div key={key} className="evaluation-by-section">
                            <span className="section-name">{sectionName}</span>
                            {
                                groupesBySection[sectionName].map((critere, key) => (
                                    <InterviewEvaluationItem
                                        key={key}
                                        critere={critere}
                                        onNoteClick={note=>updateEvaluations(critere.evaID, note)}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>

            <div className="scal-button-container">
                {
                    isHeadOfDepartment &&
                    <>
                        <button 
                            onClick = {handleSubmit}
                            disabled = { evaluations.length !== interviewEvaluations.length }
                        >
                            Envoyer
                        </button>
                        <button onClick = { handleCancel }>
                            Annuler
                        </button>
                    </>
                }
            </div>

        </div>
    );
}
