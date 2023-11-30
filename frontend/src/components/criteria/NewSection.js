import Modal from 'react-bootstrap/Modal';
import axios from '../../apiCall/axios';
import { useState } from 'react';
import useCustomeContext from '../../context/useCustomeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

export default function NewSection({ showModal, setShowModal }){

    const {
        fetchSections
    } = useCustomeContext();

    const handleClose = ()=>setShowModal(false);

    const [ sectionData, setSectionData ] = useState({});

    const handleInputs = e => {
        setSectionData({...sectionData, [e.target.id]: e.target.value});
    }

    
    const showSuccesMessage = ()=>{
        toast.success("Section d'évaluation créée avec succès !", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const showErrorMessage = ()=>{
        toast.error("Une erreure s'est produite!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    // add new section
    const handleSubmit = async()=>{
        await axios.post('/section/create',sectionData)
        .then(()=>{
            handleClose();
            showSuccesMessage();
            fetchSections();
        })
        .catch((error)=>{
            showErrorMessage();
            console.log(error)
        })
    }

    return(
        <Modal show={showModal} centered>

            <div className='modal-header'>
                <div className='modal-title'>Nouvelle section d'évaluation</div>
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
                        placeholder='Nom de la section' 
                        onChange={e=>handleInputs(e)}
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