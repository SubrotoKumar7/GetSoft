import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ReviewChart = ({ratings}) => {
    const reverseData = [...ratings].reverse();
    return (
        <div className='w-full h-[350px]'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={reverseData} layout="vertical">
                    <XAxis type="number" axisLine={false} tickLine={false} />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false}/>
                    <Tooltip />
                    <Bar dataKey="count" fill="#FF8811" barSize='32' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReviewChart;