import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, /* ... */];

export const CustomLineChart = () => (
  <div className="chart-container">
    <LineChart width="100%" height="100%" data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  </div>
);


const data1 = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, /* ... */];

export const CustomLineChart1 = () => (
  <div className="chart-container">
    <LineChart width={600} height={300} data1={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  </div>
);


const renderLineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} dot={{ fill: '#8884d8' }} />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );

const renderLineChart1 = (
<LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} dot={{ fill: '#8884d8' }} /> {/* Épaisseur de la ligne et couleur du point */}
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
</LineChart>
);

const renderLineChart2 = (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> {/* Ajout de tirets à la grille */}
      <XAxis dataKey="name" label={{ value: 'Page Name', position: 'insideBottomRight', offset: 0 }} />
      <YAxis label={{ value: 'Value', angle: -90, position: 'insideLeft' }} />
    </LineChart>
  );
  
  
// vrai bar


const data2 = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, /* ... */];

export const CustomLineChart2 = () => (
  <div className="chart-container">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data2}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  </div>
);




// vrai pie

const data3 = [
  { name: 'Atteints', value: 70 },
  { name: 'Non Atteints', value: 30 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  // Calcul du pourcentage pour l'afficher au milieu du PieChart
  const percentage = payload.name === 'Atteints' ? `${payload.value}%` : '';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text x={cx} y={cy + 20} dy={8} textAnchor="middle" fill={fill}>
        {percentage}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={-18} textAnchor={textAnchor} fill="#333">
        {`Value: ${payload.value}`}
      </text>
    </g>
  );
};

const ChartExample = () => (
  <div style={{width: '500px', height: '500px'}}>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          activeIndex={0}
          activeShape={renderActiveShape}
          data3={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default ChartExample;
