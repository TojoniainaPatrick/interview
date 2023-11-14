import Modal from 'react-bootstrap/Modal';
import axios from '../../apiCall/axios';
import { useState } from 'react';
import useCustomeContext from '../../context/useCustomeContext';

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

            <div className='modal-headel'>
                <div className='modal-title'>Modification de section d'évaluation</div>
                <div className='close-button-container'>
                    <span className='close-button'>x</span>
                </div>
            </div>

            <div className='modal-body'>
                <div className='modal-input-container'>
                    <input 
                        id='secName' 
                        type='text' 
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