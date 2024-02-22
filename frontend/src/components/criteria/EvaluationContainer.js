import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from '../../apiCall/axios';

import FormCheck from 'react-bootstrap/FormCheck';
import NewCriterion from "./NewCriterion";

import useCustomeContext from "../../context/useCustomeContext";

export default function EvaluationContainer(){

    const { 
        evaluations,
        fetchEvaluations,
        fetchPositions
    } = useCustomeContext();

    const [ showAddModal, setShowAddModal ] = useState(false);
    const [ search, setSearch ] = useState('');

    const handleOpenAddModal = ()=>setShowAddModal(true);

    useEffect(()=>{
        fetchEvaluations();
        fetchPositions();
    },[])

    const filteredData = evaluations.filter(evaluation => 
        evaluation.evaName.toString().toLowerCase().includes(search.toString().toLocaleLowerCase() 
    ))

    return(
        <>
            <NewCriterion showModal={showAddModal} setShowModal={setShowAddModal}/>

            <div className = "evaluation-container">

                <span className = "container-title">Liste des criteres d'evaluation</span>

                <div className = "evaluation-container-header">
                    <div className = "search-pad-container">
                        <i> <FontAwesomeIcon icon = { faSearch } /></i>
                        <input type = "search" placeholder = "Recherche" value={search} onChange={e=>setSearch(e.target.value)}/>
                    </div>
                    <div className = "add-button-container">
                        <button onClick={handleOpenAddModal}>
                            <i> <FontAwesomeIcon icon = { faPlus } /></i>
                            <span>nouveau critere</span>
                        </button>
                    </div>
                </div>

                <div className = "evaluation-data-container">
                    <table className = "table table-hover table-striped">
                        <thead className="fixed">
                            <tr>
                                <th>Critère d'évaluation</th>
                                <th>Valeur maximale</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredData.map((evaluation, key)=>
                                    <tr key = { key } >
                                        <td> { evaluation.evaName } </td>
                                        <td> { evaluation.evaMaxValue } </td>
                                        <td> 
                                            { 
                                                evaluation.evaStatus === "1" ? 
                                                    <span className="eva-enabled">Activé</span> : 
                                                    <span className="eva-desabled">Désactivé</span>
                                            } 
                                        </td>
                                        <td> 
                                            <FormCheck
                                                checked = {parseInt(evaluation.evaStatus) === 1}
                                                type = 'switch'
                                                inline
                                                disabled
                                            />
                                            {/* <FontAwesomeIcon icon = { faEdit } color = "var(--dark-blue)" title = "Modifier"/> */}
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </>
    )
}