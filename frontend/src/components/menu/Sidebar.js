import logo_manao from '../../images/logo.manao.png';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart,  faChartSimple, faCheckToSlot, faFileAlt, faListUl, faUsers, faSignOut } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar(){
    return(
        <div className = "sidebar-overlay">
            <div className = "sidebar-container">

                <div className = "sidebar-logo-container">
                    <img src = { logo_manao } alt = "logo manao" />
                </div>

                <div className = "sidebar-link-container">

                    <nav className = "sidebar-link-group">
                        <span className = "link-group-title">Accueil</span>
                        <NavLink to = '/dashboard'>
                            <i> <FontAwesomeIcon icon = { faChartSimple }/> </i>
                            <span>Tableau de bord</span>
                        </NavLink>
                    </nav>

                    <nav className = "sidebar-link-group">
                        <span className = "link-group-title">Statistique</span>
                        <NavLink to = '/average'>
                            <i> <FontAwesomeIcon icon = { faBarChart } /> </i>
                            <span>Moyenne générale</span>
                        </NavLink>
                        <NavLink to = '/target'>
                            <i> <FontAwesomeIcon icon = { faCheckToSlot } /> </i>
                            <span>Atteinte d'objectif</span>
                        </NavLink>
                    </nav>
                    
                    <nav className = "sidebar-link-group">
                        <span className = "link-group-title">Evaluation</span>
                        <NavLink to = '/collaborator'>
                            <i> <FontAwesomeIcon icon = { faUsers } /></i>
                            <span>Collaborateur</span>
                        </NavLink>
                        <NavLink to = '/interview'>
                            <i> <FontAwesomeIcon icon = { faFileAlt } /></i>
                            <span>Fiche d'évaluation</span>
                        </NavLink>
                        <NavLink to = '/criteria'>
                            <i> <FontAwesomeIcon icon = { faListUl } /> </i>
                            <span>Critère d'évaluation</span>
                        </NavLink>
                    </nav>
                </div>

                <div className = 'logout-container'>
                    <Link to = '/'>
                        <i> <FontAwesomeIcon icon = { faSignOut} /> </i>
                        <span>Se déconnecter</span>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}