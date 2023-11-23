import Select from 'react-select';
import doubleBar from '../../images/double.bar.chart.png';
import areaChart from '../../images/area.chart.png';

export default function AverageContainer(){
    return(
        <div className="average-container">

            <span className="container-title"> Analyse de moyenne générale</span>

            <div className="average-container-header">

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

            <div className='average-container-data'>

                <div className='first-graph'>
                    <img src = { doubleBar } />
                </div>

            </div>

        </div>
    )
}