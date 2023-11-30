import Select from 'react-select';
import doubleBar from '../../images/double.bar.chart.png';
import areaChart from '../../images/area.chart.png';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AverageContainer(){

    const data = [
        {
          name: 'Trimestre1 ',
          moyenne: 13
        },
        {
          name: 'Trimeste 2',
          moyenne: 15
        },
        {
          name: 'Trimestre 3',
          moyenne: 17
        },
        {
          name: 'Trimestre 4',
          moyenne: 18
        }
      ];

    return(
        <div className="average-container">

            <span className="container-title"> Analyse de moyenne générale</span>

            <div className="average-container-header">

                <div className='choice-select'>
                    <Select placeholder = "Année"/>
                </div>

                <div className='choice-select'>
                    <Select placeholder = "Département"/>
                </div>

            </div>

            <div className='average-container-data'>

                        <span className = "container-title">Moyenne générale (Annuel)</span>

                        <div className='average-graph-container'>
                            <ResponsiveContainer width="80%" height="100%">
                                <BarChart width={100} height={100} data={data} title='allo'>
                                    <Bar dataKey="moyenne" fill="#8884d8"/>
                                    <XAxis dataKey = "name" />
                                    <YAxis />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
            </div>

        </div>
    )
}