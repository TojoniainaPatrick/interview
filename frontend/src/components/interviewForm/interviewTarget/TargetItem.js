import { useState } from "react";
import axios from "../../../apiCall/axios";
import FormCheck from 'react-bootstrap/FormCheck';

export default function TargetItem({ target, getTargets }){

    const { trgID, trgTarget, trgIsAccomplished } = target;
    const [ checked, setChecked ] = useState(trgIsAccomplished);

    const accomplishTarget = async(targetID)=>{
        await axios.put(`/target/accomplish/${targetID}`)
        .then(()=>getTargets())
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
            <input 
                type = "checkbox" 
                checked = { parseInt(checked) === 1 }
                onChange = { handleCheck }
            />
            <label>{ trgTarget }</label>
        </div>
    )
}