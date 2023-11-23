import Modal from 'react-bootstrap/Modal';
import axios from '../../apiCall/axios';
import { useState } from 'react';
import useCustomeContext from '../../context/useCustomeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function EditSection({ showModal, setShowModal, section }){

    const {
        fetchSections
    } = useCustomeContext();

    const handleClose = ()=>setShowModal(false);

    const [ sectionData, setSectionData ] = useState({
        secName: section.secName
    });

    const handleInputs = e => {
        setSectionData({...sectionData, [e.target.id]: e.target.value});
    }

    const handleSubmit = async()=>{
        await axios.put(`/section/update/${section.secID}`,sectionData)
        .then(()=>{
            handleClose();
            alert("section modifiee avec succes");
            fetchSections();
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <Modal show={showModal} centered>

            <div className='modal-header'>
                <div className='modal-title'>Modification de section d'évaluation</div>
                <div className='close-button-container'>
                <span className='modal-close-button' onClick={ handleClose }>
                        <i> <FontAwesomeIcon icon = { faTimes } /></i>
                    </span>
                </div>
            </div>

            <div className='modal-body'>
                <div className='modal-input-container'>
                    <input 
                        id='secName' 
                        type='text'
                        className='perso-input'
                        value={sectionData.secName} 
                        onChange={e=>handleInputs(e)}
                    />
                </div>
            </div>

            <div className='modal-footer'>
                <button onClick={handleSubmit}>Modifier</button>
                <button onClick={handleClose}>Annuler</button>
            </div>
        </Modal>
    )
}