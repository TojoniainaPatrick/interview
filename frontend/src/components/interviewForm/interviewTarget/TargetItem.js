import { useState } from "react";
import axios from "../../../apiCall/axios";
import FormCheck from 'react-bootstrap/FormCheck';
import { toast } from 'react-toastify';

export default function TargetItem({ target, getTargets }){

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
        await axios.put(`/target/accomplish/${targetID}`)
        .then(()=>{
            showSuccesMessage();
            getTargets()
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const unAccomplishTarget = async(targetID)=>{
        await axios.put(`/target/unaccomplish/${targetID}`)
        .then(()=>getTargets())
        .catch((error)=>{
            console.log(error)
        })
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
            {
                !isHeadOfDepartment &&
                <input 
                    type = "checkbox" 
                    checked = { parseInt(checked) === 1 }
                    onChange = { handleCheck }
                />
            }
            <label>{ trgTarget }</label>
        </div>
    )
}