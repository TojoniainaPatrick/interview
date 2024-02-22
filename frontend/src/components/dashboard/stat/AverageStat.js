import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function AverageStat(){

    const data = [
        {
          name: 'Trimester 1',
          moyenne: 14
        },
        {
          name: 'Trimester 2',
          moyenne: 17
        },
        {
          name: 'Trimester 3',
          moyenne: 15
        },
        {
          name: 'Trimester 4',
          moyenne: 18
        }
      ];

    return(
        <div className="average-stat">

            <span className = "container-title">Moyenne générale (par département)</span>

            <div className='average-graph-container'>
              <ResponsiveContainer width="100%" height="80%">
                  <BarChart width={100} height={100} data={data}>
                      <Bar dataKey="moyenne" fill="#8884d8"/>
                      <XAxis dataKey = "name" />
                      <YAxis />
                  </BarChart>
              </ResponsiveContainer>
            </div>
            

        </div>
    )
}