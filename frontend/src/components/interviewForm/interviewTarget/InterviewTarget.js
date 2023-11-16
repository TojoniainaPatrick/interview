import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../apiCall/axios";

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
        <div>
            <div>
                {
                    interviewTargets.map((target, key) =>
                        <div key={key}>{target.trgTarget}</div>
                    )
                }
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder="Fixer un objectif" 
                    onChange={e=>setTrgTarget(e.target.value)}
                    value={trgTarget}
                />
                <button onClick={addTarget}>Ajouter</button>
            </div>
        </div>
    )
}