import axios from "../../apiCall/axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import SectionItem from "./SectionItem";
import NewSection from "./NewSection";
import useCustomeContext from '../../context/useCustomeContext';

export default function Section(){

    const { 
        sections,
        fetchSections
    } = useCustomeContext();
    const [ showAddModal, setShowAddModal ] = useState(false);

    const handleOpenAddModal = ()=>setShowAddModal(true);

    useEffect(()=>{
        fetchSections();
    },[])


    return(
        <>
            <NewSection showModal={showAddModal} setShowModal={setShowAddModal} />
            <div className = "section-container">

                <span className = "container-title">Section d'evaluation</span>

                <div className="section-container-header">

                    <div className = "search-pad-container">
                        <i> <FontAwesomeIcon icon = { faSearch } /></i>
                        <input type = "search" placeholder = "Recherche"/>
                    </div>

                    <div className = "add-button-container">
                        <button onClick={handleOpenAddModal}>
                            <i> <FontAwesomeIcon icon = { faPlus } /></i>
                            <span>nouvelle section</span>
                        </button>
                    </div>

                </div>
                <div className="section-data-container">
                    {
                        sections.map((section, key)=>
                            <SectionItem key={key} section={section} />
                        )
                    }
                </div>
            </div>
        </>
    )
}