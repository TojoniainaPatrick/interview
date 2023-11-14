import Modal from 'react-bootstrap/Modal';
import axios from '../../apiCall/axios';
import { useState } from 'react';
import useCustomeContext from '../../context/useCustomeContext';

export default function NewSection({ showModal, setShowModal }){

    const {
        fetchSections
    } = useCustomeContext();

    const handleClose = ()=>setShowModal(false);

    const [ sectionData, setSectionData ] = useState({});

    const handleInputs = e => {
        setSectionData({...sectionData, [e.target.id]: e.target.value});
    }

    // add new section
    const handleSubmit = async()=>{
        await axios.post('/section/create',sectionData)
        .then(()=>{
            handleClose();
            alert("section ajoutee avec succes");
            fetchSections();
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <Modal show={showModal} centered>

            <div className='modal-headel'>
                <div className='modal-title'>Nouvelle section d'évaluation</div>
                <div className='close-button-container'>
                    <span className='close-button'>x</span>
                </div>
            </div>

            <div className='modal-body'>
                <div className='modal-input-container'>
                    <input 
                        id='secName' 
                        type='text' 
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