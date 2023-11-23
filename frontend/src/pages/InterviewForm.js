import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Outlet, NavLink, Link, useParams } from 'react-router-dom';
import useCustomeContext from '../context/useCustomeContext';

export default function InterviewForm(){

    const {
        interviews
    } = useCustomeContext();

    const { itrwID } = useParams();

    return(
        <div className="interview-form">

            <nav className='interview-form-nav'>

                <Link to={`/interview`}>Fiche d'evaluation</Link>

                <NavLink to={`/interview/interviewForm/${itrwID}/target`}>Objectif</NavLink>

                <NavLink to={`/interview/interviewForm/${itrwID}/scal`}>Grille d'evaluation</NavLink>

                <NavLink to={`/interview/interviewForm/${itrwID}/question`}>Question</NavLink>

                <NavLink to={`/interview/interviewForm/${itrwID}/comment`}>Commentaire</NavLink>
            </nav>
            
            <>
                <Outlet />
            </>
        </div>
    )
}