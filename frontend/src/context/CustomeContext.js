import { useState, createContext } from "react";
import axios from "../apiCall/axios";

const CustomeContext = createContext({})


export function CustomeContextProvider({children}){

    ///////////////////////////////// Loading ////////////////////////////////
    const [ loading, setLoading ] = useState( false )
    const load = () => setLoading( true )
    const unLoad = () => setLoading ( false )

    ///////////////////////////////// modal data ///////////////////////////////
    const [ showModal, setShowModal ] = useState(false);
    const [ modalIcon, setModalIcon ] = useState(null);
    const [ modalText, setModalText ] = useState("");
    const [ isConfirm, setIsConfirm ] = useState(false);
    const [ onAccept, setOnAccept ] = useState(null);

    // ////////////////////////////// year /////////////////////////////////
    const defaultCurrentYear = new Date().getFullYear();
    const [ years, setYears ] = useState([]);
    const [ currentYear, setCurrentYear ] = useState(defaultCurrentYear);

    // fetch years' list
    const fetchYears = async()=>{
        load();
        await axios('/year')
        .then((response)=>{
            setYears(response.data.data);
        })
        .catch((error)=>{
            setYears([]);
            console.log(error);
        })
        .finally(() => unLoad())
    }

    const getCurrentYear = async() => {
        load();
        await axios('/year/current')
        .then((response) => {
            setCurrentYear(response.data.data.yooID);
        })
        .catch((error) => {
            setCurrentYear(defaultCurrentYear);
            console.log(error);
        })
        .finally(() => unLoad())
    };

    // ////////////////////////////// period ////////////////////////////////
    const [ periods, setPeriods ] = useState([]);
    const [ currentPeriod, setCurrentPeriod ] = useState(null);

    // fetch periods' list
    const fetchPeriods = async()=>{
        load();
        await axios('/period')
        .then((response)=>{
            setPeriods(response.data.data);
        })
        .catch((error)=>{
            setPeriods([]);
            console.log(error);
        })
        .finally(() => unLoad())
    }
 
    const getCurrentPeriod = async() => {
        load();
        await axios('/period/current')
        .then((response) => {
            setCurrentPeriod(response.data.data.perID);
        })
        .catch((error) => {
            setCurrentPeriod('');
            console.log(error);
        })
        .finally(() => unLoad())
    };

    // get periods of a year
    const getYearPeriods = (yearID)=>{
        return periods.filter(period => parseInt(period.yooID) === parseInt(yearID));
    }

    // get current trimestre id
    const getCurrentTrimestreID = ()=>{
        let today = new Date();
        let currentPeriod = periods.find(period=>
                new Date(period.perStartDate) <= today &&
                new Date(period.perEndDate) >= today
            );
        return currentPeriod?.perID;
    }


    ///////////////////////////////// section ///////////////////////////////
    const [ sections, setSections ] = useState([]);
    const [ currentSection, setCurrentSection ] = useState(null);

    // fetch section list
    const fetchSections = async()=>{
        load();
        await axios('/section')
        .then((response)=>{
            setSections(response.data.data);
        })
        .catch((error)=>{
            setSections([]);
            console.log(error)
        })
        .finally(() => unLoad())
    }

    ///////////////////////////////// evaluation ///////////////////////////////
    const [ evaluations, setEvaluations ] = useState([]);
    const [ currentEvaluation, setCurrentEvaluation ] = useState({
        evaName: "",
        posID: "",
        evaMaxValue: null
    });
    
    // fetch evaluation list
    const fetchEvaluations = async () => {
        load();
        await axios('/evaluationItem')
        .then(response =>{
            setEvaluations(response.data.data)
        })
        .catch(fetchError=>{
            setEvaluations([]);
            console.log(fetchError)
        })
        .finally(() => unLoad())
    }

    ///////////////////////////////// position ///////////////////////////////
    const [ positions, setPositions ] = useState([]);
    // fecth interview list
    const fetchPositions = async () => {
        load();
        await axios('/position')
        .then(response =>{
            setPositions(response.data.data)
        })
        .catch(fetchError =>{
            setPositions([]);
            console.log(fetchError);
        })
        .finally(() => unLoad())
    }

    ///////////////////////////////// interview ///////////////////////////////
    const [ interviews, setInterviews ] = useState([]);
    const [ currentInterview, setCurrentInterview ] = useState(null);

    // fecth interview list
    const fetchInterviews = async () => {
        load();
        await axios('/interview')
        .then(response =>{
            setInterviews(response.data.data)
        })
        .catch(fetchError =>{
            setInterviews([]);
            console.log(fetchError);
        })
        .finally(() => unLoad())
    }

    ///////////////////////////////// interview evaluation ///////////////////////////////
    const [ interviewEvaluations, setInterviewEvaluations ] = useState([]);

    // fetch interviewEvaluations list
    const getInterviewEvaluation = async () =>{
        load();
        await axios('/interviewEvaluation')
        .then(response => {
            setInterviewEvaluations(response.data.data)
        })
        .catch(fetchError => {
            setInterviewEvaluations([]);
            console.log(fetchError)
        })
    }

    ///////////////////////////////// interview targets ///////////////////////////////
    const [ targets, setTargets ] = useState([]);

    // fetch targets
    const fetchTargets = async () => {
        load();
        await axios('/target')
        .then(response => {
            setTargets(response.data.data)
        })
        .catch(fetchError => {
            setTargets([]);
            console.log(fetchError)
        })
        .finally(() => unLoad())
    }

    ///////////////////////////////// user ///////////////////////////////
    const [ users, setUsers ] = useState([]);

    // fetch user list
    const getUser = async () => {
        load();
        await axios.get('/user/list')
        .then(response => {
            setUsers(response.data)
        })
        .catch(fetchError => {
            setUsers([]);
            console.log(fetchError)
        })
        .finally(() => unLoad())
    }

    return(
        <CustomeContext.Provider value={{

            //loading
            loading,
            setLoading,
            load,
            unLoad,
            // modal

            showModal,
            setShowModal,
            modalIcon,
            setModalIcon,
            modalText,
            setModalText,
            isConfirm,
            setIsConfirm,
            onAccept,
            setOnAccept,

            // year
            years,
            setYears,
            fetchYears,
            currentYear,
            setCurrentYear,
            getCurrentYear,

            // period
            periods,
            setPeriods,
            fetchPeriods,
            getYearPeriods,
            currentPeriod,
            setCurrentPeriod,
            getCurrentPeriod,
            getCurrentTrimestreID,

            // section
            currentSection,
            setCurrentSection,
            sections,
            setSections,
            fetchSections,

            // evaluation
            evaluations,
            setEvaluations,
            currentEvaluation,
            setCurrentEvaluation,
            fetchEvaluations,

            // position
            positions,
            setPositions,
            fetchPositions,

            // interview
            interviews,
            setInterviews,
            currentInterview,
            setCurrentInterview,
            fetchInterviews,

            // intrview evaluation
            interviewEvaluations,
            setInterviewEvaluations,
            getInterviewEvaluation,

            // target
            targets,
            setTargets,
            fetchTargets,

            // user
            users,
            setUsers,
            getUser
        }}>
            { children }
        </CustomeContext.Provider>
    )
}

export default CustomeContext;