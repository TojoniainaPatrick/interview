import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faRemove, faQuestion } from '@fortawesome/free-solid-svg-icons';
import EditSection from './EditSection';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from '../../apiCall/axios';
import useCustomeContext from '../../context/useCustomeContext';

export default function SectionItem({ section }){

    const {
        fetchSections,
        fetchEvaluations,
        currentSection,
        setCurrentSection
    } = useCustomeContext();

    const {
        secID,
        secName
    } = section

    const [ showEditModal, setShowEditModal ] = useState(false);
    const [ showConfirm, setShowConfirm ] = useState(false);

    const handleOpenEditModal = ()=>setShowEditModal(true);
    const handleConfirm = ()=>setShowConfirm(true);
    const handleCloseConfirm = ()=>setShowConfirm(false);

    const handleDelete = (secID)=>{
        axios.delete(`/section/delete/${secID}`)
        .then(()=>{
            fetchSections();
            handleCloseConfirm();
            fetchEvaluations();
            alert("suppression effectuee avec succes");
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleSelectSection = () =>{
        Number( currentSection ) === Number( secID ) ? setCurrentSection(null) : setCurrentSection(secID)
    }

    const sectionItemClasse = Number( currentSection ) === Number( secID ) ? "section-item active" : "section-item"

    return(
        <>
            <EditSection 
                showModal={showEditModal} 
                setShowModal={setShowEditModal} 
                section={section} 
            />

            {/* deletion confirm dialog */}
            <Modal show = { showConfirm } centered>
                <div className='confirm-icon-container'>
                    <i className='icon-container question'>
                        < FontAwesomeIcon icon={faQuestion} />
                    </i>
                </div>
                <div className='confirm-text-container'>
                    <p>
                        La suppression d'une section d'évaluation desactive automatiquement ses critères.Voulez-vous continuer la suppression?
                    </p>
                </div>
                <div className='confirm-button-container'>
                    <button onClick = { ()=>handleDelete(secID)}>Continuer</button>
                    <button onClick = { handleCloseConfirm }>Annuler</button>
                </div>
            </Modal>

            <div className = { sectionItemClasse } onClick = { handleSelectSection }>
                <div className='section-name-container'>
                    <span className="sectino-name">{ secName }</span>
                </div>
                <div className='action-container'>
                        <i 
                            onClick={handleOpenEditModal} 
                            title='Modifier'
                        >
                            < FontAwesomeIcon icon={faEdit} />
                        </i>
                        <i
                            onClick={handleConfirm}
                            title='Supprimer'
                        >
                            < FontAwesomeIcon icon={faRemove} />
                        </i>
                </div>
            </div>
        </>
    )
}