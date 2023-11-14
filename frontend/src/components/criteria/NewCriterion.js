import Modal from 'react-bootstrap/Modal';
import axios from '../../apiCall/axios';
import { useState } from 'react';
import useCustomeContext from '../../context/useCustomeContext';
import Select from 'react-select';

export default function NewCriterion({ showModal, setShowModal }){

    const {
        sections,
        positions,
        fetchEvaluations
    } = useCustomeContext();

    const [ evaluationItem, setEvaluationItem ] = useState({
        positions: []
    });

    const handleInputs = (e)=>{
        setEvaluationItem({...evaluationItem, [e.target.id]: e.target.value})
    }

    const handleSectionChange = (selectedValue) =>{
        setEvaluationItem({...evaluationItem, secID: selectedValue.secID})
    }

    const handlePositionChange = (selectedValue) =>{
        setEvaluationItem({...evaluationItem, positions: selectedValue})
    }

    const handleSubmit = async()=>{
        axios.post('/evaluationItem/new', evaluationItem)
        .then((response)=>{
            alert(response.data.message)
            fetchEvaluations();
            handleClose();
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleClose = ()=>setShowModal(false);

    return(
        <Modal show = { showModal } centered>
            
            <div className='modal-header'>
                <span className='modal-title'>Nouveau critère</span>
                <span className='modal-close-button'>x</span>
            </div>

            <div className='modal-body'>

                <div className='modal-input-container'>
                    <input
                        id='evaName' 
                        type = 'text' 
                        placeholder='Nom du nouveau critere'
                        onChange={(e)=>handleInputs(e)}
                    />
                </div>

                <div className='modal-input-container'>
                    <input
                        id='evaMaxValue' 
                        type = 'number' 
                        placeholder='Valeur maximale'
                        onChange={(e)=>handleInputs(e)}
                    />
                </div>

                <div className='modal-input-container'>
                    <Select
                        options={sections}
                        onChange={handleSectionChange}
                        getOptionLabel={ (option)=>option.secName }
                        getOptionValue={ (option)=>option.secID}
                    />
                </div>

                <div className='modal-input-container'>
                    <Select
                        isMulti
                        options={positions}
                        onChange={handlePositionChange}
                        getOptionLabel={ (option)=>option.posName }
                        getOptionValue={ (option)=>option.posID}
                    />
                </div>

            </div>

            <div className='modal-footer'>
                <button onClick={handleSubmit}>Ajouter</button>
                <button onClick={handleClose}>Annuler</button>
            </div>


        </Modal>
    )
}