import axios from '../../apiCall/axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import CollaboratorItem from './CollaboratorItem';
import useCustomeContext from '../../context/useCustomeContext'

export default function CollaboratorContainer(){

    const [ users, setUsers ] = useState([]);
    const [ departments, setDepartments ] = useState([]);

    const {
        load,
        unLoad
    } = useCustomeContext()

    // get users
    const getUsers = async() => {
        load();
        await axios('/user/fullinformation')
        .then((response) => {
            setUsers(response.data.data);
        })
        .catch((error) => {
            setUsers([]);
            console.log(error);
        })
        .finally(() => unLoad())
    };

    // get departments
    const getDepartments = async() => {
        load();
        await axios('/department')
        .then((response) => {
            setDepartments(response.data.data);
        })
        .catch((error) => {
            setDepartments([]);
            console.log(error);
        })
        .finally(() => unLoad())
    };

    useEffect(() => {
        getUsers();
        getDepartments();
    }, [])

    return(
        <div className='collaborator-container'>

            <span className='container-title'> Liste des Collaborateurs</span>

            <div className='collaborator-container-header'>
                <div className='search-pad-container'>
                    <i> <FontAwesomeIcon icon = { faSearch } /></i>
                    <input type = "serach" placeholder='Recherche' />
                </div>

                <div className='department-choice'>
                    <Select 
                        options={departments}
                        getOptionLabel={(option)=> option.deptName }
                        getOptionValue={(option)=> option.deptID }
                        placeholder="Departement"
                    />
                </div>

            </div >

            <div className='collaborator-container-data'>
                {
                    users.map((user, key) => 
                        <CollaboratorItem key={key} collaborator={user} />
                    )
                }
            </div>
        </div>
    )
}