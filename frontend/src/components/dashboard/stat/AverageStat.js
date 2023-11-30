import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function AverageStat(){

    const data = [
        {
          name: 'Informatique',
          moyenne: 14
        },
        {
          name: 'Ressources humaines',
          moyenne: 17
        },
        {
          name: 'Assistance',
          moyenne: 15
        },
        {
          name: 'Externalisation',
          moyenne: 18
        }
      ];

    return(
        <div className="average-stat">

            <span className = "container-title">Moyenne générale (par département)</span>

            <div className='average-graph-container'>
              <ResponsiveContainer width="80%" height="80%">
                  <BarChart width={100} height={100} data={data} title='allo'>
                      <Bar dataKey="moyenne" fill="#8884d8"/>
                      <XAxis dataKey = "name" />
                      <YAxis />
                  </BarChart>
              </ResponsiveContainer>
            </div>
            

        </div>
    )
}