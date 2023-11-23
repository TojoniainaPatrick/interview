import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import CardContainer from '../components/dashboard/CardContainer';
import StatContainer from '../components/dashboard/StatContainer';
import DashboardDepartment from '../components/dashboard/DashboardDepartment';

export default function Dashboard(){
    return(
        <div className="dashboard-page">

            <div className='page-title'>
                <i> <FontAwesomeIcon icon = { faChartSimple } /> </i>
                <span> Tableau de bord </span>
            </div>

            <div className='dashboard-data-container'>
                <CardContainer />
                <StatContainer />
                <DashboardDepartment />
            </div>

        </div>
    )
}