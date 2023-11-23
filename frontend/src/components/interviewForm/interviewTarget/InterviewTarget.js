import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../apiCall/axios";
import TargetItem from "./TargetItem";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function InterviewTarget(){

    const { itrwID } = useParams();
    const [ interviewTargets, setInterviewTargets ] = useState([]);
    const [ trgTarget, setTrgTarget ] = useState('');

    // fetch interview targets
    const fetchInterviewTargets = async(interviewID) =>{
        await axios(`/target/interview/${interviewID}`)
        .then((response)=>{
            setInterviewTargets(response.data.data)
        })
        .catch((error)=>{
            setInterviewTargets([])
            console.log(error)
        })
    }

    const targetNumber          = interviewTargets.length;
    const accoplishedTargets    = interviewTargets.filter( target=> parseInt(target.trgIsAccomplished) === 1 ).length; 
    const unAccoplishedTargets  = interviewTargets.filter( target=> parseInt(target.trgIsAccomplished) === 0 ).length; 


    // add new target
    const addTarget = async()=>{
        axios.post('/target/create',{ itrwID, trgTarget })
        .then((response)=>{
            fetchInterviewTargets(itrwID);
            setTrgTarget('');
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        fetchInterviewTargets(itrwID);
    },[])

    return(
        <div className="interview-target-container">

            <span className="page-title">Liste des objectifs</span>

            <div className="interview-target-stat">
                <span>Nombre total des objectifs : { targetNumber }</span>
                <span>Nombre total des objectifs atteints : { accoplishedTargets }/ { targetNumber }</span>
            </div>

            <div className="target-data-container">
                {
                    interviewTargets.map((target, key) =>
                        <TargetItem 
                            key={key} 
                            target={target}
                            getTargets = {()=> fetchInterviewTargets(itrwID)}
                        />
                    )
                }
            </div>

            <div className="target-input-container">
                <input 
                    type="text" 
                    placeholder="Fixer un objectif" 
                    onChange={e=>setTrgTarget(e.target.value)}
                    value={trgTarget}
                />
                <button onClick={addTarget}>
                    <i> <FontAwesomeIcon icon={faPaperPlane} /> </i>
                </button>
            </div>
        </div>
    )
}