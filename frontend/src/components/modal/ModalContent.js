import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useCustomeContext from '../../context/useCustomeContext'
import {
    faQuestionCircle,
    faTimesCircle,
    faWarning,
    faTimes,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons'


export default function ModalContent(){

    const {
        showModal,
        setShowModal,
        modalIcon,
        modalText,
        isConfirm,
        onAccept
    } = useCustomeContext()

    return(
        <div className = { showModal ? "modal-overlay shown" : "modal-overlay closed" }>
            <div className="modal-content">
                <div className="close-bar">
                    <span className="close-button"  onClick = { () => setShowModal(false) }>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </div>

                <div className="modal-icon">
                    { modalIcon === 'error' && <span className='icon-container error'><FontAwesomeIcon icon = { faTimesCircle } /></span> }
                    { modalIcon === 'warning' && <span className='icon-container warning'><FontAwesomeIcon icon = { faWarning } /></span> }
                    { modalIcon === 'success' && <span className='icon-container success'><FontAwesomeIcon icon = { faCheckCircle } /></span> }
                    { modalIcon === 'question' && <span className='icon-container question'><FontAwesomeIcon icon = { faQuestionCircle } /></span> }
                </div>

                <div className="modal-text">
                    <p> { modalText } </p>
                </div>

                {
                    isConfirm
                    ?
                    <div className="modal-button">
                        <button onClick={ onAccept }>Continuer</button>
                        <button onClick = { () => setShowModal(false) }>Annuler</button>
                    </div>
                    :
                    <div className="modal-button">
                        <button onClick = { () => setShowModal(false) }>OK</button>
                    </div>
                }
            </div>
        </div>
    )
}