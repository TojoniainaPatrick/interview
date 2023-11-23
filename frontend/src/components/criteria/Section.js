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
    const [ search, setSearch ] = useState('');

    useEffect(()=>{
        fetchSections();
    },[])
    
    const filteredData = sections.filter(section => 
        section.secName.toString().toLowerCase().includes(search.toString().toLocaleLowerCase() 
    ))

    return(
        <>
            <NewSection showModal={showAddModal} setShowModal={setShowAddModal} />
            <div className = "section-container">

                <span className = "container-title">Section d'evaluation</span>

                <div className="section-container-header">

                    <div className = "search-pad-container">
                        <i> <FontAwesomeIcon icon = { faSearch } /></i>
                        <input type = "search" placeholder = "Recherche" value={search} onChange={e=>setSearch(e.target.value)}/>
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
                        filteredData.map((section, key)=>
                            <SectionItem key={key} section={section} />
                        )
                    }
                </div>
            </div>
        </>
    )
}