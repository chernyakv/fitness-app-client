import React from 'react'
import 'antd/dist/antd.css';
import './Progress.css'
import 'react-vis/dist/style.css';
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from 'recharts';

const Progress = ({parameters}) => {
  const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const data = parameters.map((param) => {
    const date = new Date(param.date);
    return {
      weight: param.weight,
      name: month_names_short[date.getMonth()] + " " + date.getDate()
    }
  });

  return (
    <div className="progress-component">
      <BarChart
        width={800}
        height={550}
        data={data}
        margin={{top: 5, right: 5, bottom: 5}}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Bar dataKey="weight" fill="#8884d8"/>
      </BarChart>
    </div>
  );
}

export default Progress
