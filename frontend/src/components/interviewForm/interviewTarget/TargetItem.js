import { useState } from "react";
import axios from "../../../apiCall/axios";
import { toast } from 'react-toastify';
import  useCustomeContext  from '../../../context/useCustomeContext'

export default function TargetItem({ target, getTargets }){

    const {
        load,
        unLoad
    } = useCustomeContext();

    const userData = JSON.parse(localStorage.getItem('userData'));
    const isHeadOfDepartment = userData.isHeadOfDepartment === 1;

    const { trgID, trgTarget, trgIsAccomplished } = target;
    const [ checked, setChecked ] = useState(trgIsAccomplished);

    const showSuccesMessage = ()=>{
        toast.success("Félicitation pour l'atteinte de cet objectif!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const showErrorMessage = ()=>{
        toast.error("Une erreure s'est produite!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const accomplishTarget = async(targetID)=>{
        load();
        await axios.put(`/target/accomplish/${targetID}`)
        .then(()=>{
            showSuccesMessage();
            getTargets()
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=> unLoad())
    }

    const unAccomplishTarget = async(targetID)=>{
        load();
        await axios.put(`/target/unaccomplish/${targetID}`)
        .then(()=>getTargets())
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=> unLoad())
    }

    const handleCheck = e => {
        if(e.target.checked) {
            accomplishTarget(trgID);
            setChecked(1);
        }
        else {
            unAccomplishTarget(trgID);
            setChecked(0);
        }
    }

    return(
        <div className = "target-item-container"> 
            <input 
                type = "checkbox" 
                disabled = { isHeadOfDepartment }
                checked = { parseInt(checked) === 1 }
                onChange = { handleCheck }
            />
            <label>{ trgTarget }</label>
        </div>
    )
}