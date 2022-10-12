import { Tooltip, PieChart, Pie } from 'recharts';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const quizData = useLoaderData()
    const { data } = quizData;
    const { total, } = data;
    return (
        <div className='mt-16'>
            <h1 className='text-4xl text-center font-bold pb-10'>Quiz Chart</h1>
            <div className='flex justify-center'>
                <PieChart width={350} height={250}>
                    <Pie data={data} dataKey="total" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="total" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;