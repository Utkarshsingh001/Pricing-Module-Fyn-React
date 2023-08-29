import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function MyLineChart({ridesData}) {
  
    const data = Object.entries(ridesData).map(([created_at, total_charges]) => ({
        time: created_at,
        money: total_charges.total_charges,
    }));
        console.log(data);
  return (
    <LineChart width={1200} height={400} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="money" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

export default MyLineChart;