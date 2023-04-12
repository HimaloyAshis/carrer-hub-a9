import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const marks = [
        { id: 1, name: 'assignmentOne', assignmentMark: 45 },
        { id: 2, name: 'assignmentTwo', assignmentMark: 47 },
        { id: 3, name: 'assignmentThree', assignmentMark: 58 },
        { id: 4, name: 'assignmentFour', assignmentMark: 51 },
        { id: 5, name: 'assignmentFive', assignmentMark: 58 },
        { id: 6, name: 'assignmentSix', assignmentMark: 43 },
        { id: 7, name: 'assignmentSeven', assignmentMark: 54 },
        { id: 8, name: 'assignmentEight', assignmentMark: 56 },


    ]
    return (
        <div className=''>
            <h2 className='bg-fuchsia-900 text-center font-bold text-3xl p-10 text-gray-300 mb-10'>Here is statistics of my assignment</h2>
            <AreaChart
                width={900}
                height={400}
                data={marks}
            >
                <XAxis dataKey="name"></XAxis>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                <Area stroke="#8884d8" dataKey='assignmentMark' type="monotone"></Area>
            </AreaChart>
        </div>
    );
};

export default Statistics;   