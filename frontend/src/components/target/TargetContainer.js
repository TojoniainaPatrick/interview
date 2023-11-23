import Select from 'react-select';
import areaChart from '../../images/area.chart.png';

export default function TargetContainer(){
    return(
        <div className="target-container">

            <span className="container-title"> Analyse d'atteinte d'objectif</span>

            <div className="target-container-header">

                <div className='choice-select'>
                    <Select placeholder = "Année"/>
                </div>

                <div className='choice-select'>
                    <Select placeholder = "Trimestre"/>
                </div>

                <div className='choice-select'>
                    <Select placeholder = "Section"/>
                </div>

                <div className='choice-select'>
                    <Select placeholder = "Critère"/>
                </div>

                <div className='choice-select'>
                    <Select placeholder = "Département"/>
                </div>

            </div>

            <div className='target-container-data'>

                <div className='first-graph'>
                    <img src = { areaChart } />
                </div>

            </div>

        </div>
    )
}