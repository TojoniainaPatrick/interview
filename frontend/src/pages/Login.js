import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from '../apiCall/axios';

import useCustomeContext from '../context/useCustomeContext';

import logo from '../images/logo.manao.png';

export default function Login () {

    const [showEye, setShowEye] = useState(true);
    const [user, setUser] = useState({
      userEmail : '',
      userPassword : ''
    });

    // custome context
    const {
        setShowModal,
        setModalIcon,
        setIsConfirm,
        setModalText
    } = useCustomeContext();


    //  navigation variable
    const navigate = useNavigate();
    
    //  handle inputs
    const handleChangeInput = (e) => {
        setUser({...user, [e.target.id] : e.target.value})
    };

    //  show & hide the password
    const handleClickIconEye = () => {
        setShowEye(!showEye)
        showEye
        ? document.querySelector("#userPassword").type = 'text'
        : document.querySelector("#userPassword").type = 'password'
    };
    
    //  check the email validity
    const isEmailValid = email=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    };

    //  submit data
    const handleSubmit = e => {
        e.preventDefault();
        
        if(!isEmailValid(user.userEmail))
        {
            setModalIcon("warning");
            setIsConfirm(false);
            setModalText("Merci de saisir une adresse mail valide");
            setShowModal(true);
        }
        else
        {
            axios.post('/user/login', user)
            .then(response =>{
                localStorage.setItem('userData', JSON.stringify(response.data.data));
                navigate('/dashboard');
            })
            .catch((error)=>{
                setModalIcon("error");
                setIsConfirm(false);
                setModalText(error.response.data.messages.error);
                setShowModal(true);
            })
        }
    };

    return(
        <>
        <div className = "login-page">
            <div className = "login-container">
                <div className = "login-form-left">
                    <div className="logo-container">
                        <img src= { logo } alt="manao group's logo" />
                    </div>
                    <div className="title-container">
                        <span className='title'>Suivi des entretiens trimestriels des salariés</span>
                    </div>
                </div>
                <div className = "login-form-right">
                <form onSubmit={handleSubmit}>

                    <div className="input-container">
                        <input 
                            type="email" 
                            value = {user.userEmail} 
                            name='userEmail' 
                            id='userEmail' 
                            placeholder=''
                            onChange={handleChangeInput} 
                            required/>
                        <label  htmlFor="userEmail">Adresse mail</label>
                    </div>

                    <div className="input-container">
                        <input 
                            type="password" 
                            value = {user.userPassword} 
                            name='userPassword' 
                            id='userPassword' 
                            placeholder=''
                            onChange={handleChangeInput}
                            required />
                        <label  htmlFor="userPassword">Mot de passe</label>
                        <i className='icon-eye' >
                            {
                            showEye 
                                ? <FontAwesomeIcon icon={faEye} onClick={handleClickIconEye}/>
                                : <FontAwesomeIcon icon={faEyeSlash} onClick={handleClickIconEye}/>
                            }
                        </i>
                    </div>

                    <button  type="submit" className='btn-authentification d-flex align-items-center justify-content-center'>
                        <i className = "btn-icon">
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </i>
                        Se connecter
                    </button>

                </form>
                </div>
            </div>
        </div>
        </>
    )
}