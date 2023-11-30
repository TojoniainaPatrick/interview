import Select from 'react-select';
import areaChart from '../../images/area.chart.png';
import TargetStat from '../dashboard/stat/TargetStat';

export default function TargetContainer(){
    return(
        <div className="target-container">

            <span className="container-title"> Analyse d'atteinte d'objectif</span>

            <div className="target-container-header">

                <div className='choice-select'>
                    <Select placeholder = "Année"/>
                </div>

                <div className='choice-select'>
                    <Select placeholder = "Département"/>
                </div>

            </div>

            <div className='target-container-data'>

                <TargetStat />

            </div>

        </div>
    )
}