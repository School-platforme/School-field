import React, { PureComponent } from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const data = [
    {
        name: 'Team A',
        performance: 60,
        teacher: 80,
        student: 50,
    },
    {
        name: 'Team B',
        performance: 80,
        teacher: 90,
        student: 50,
    },
    {
        name: 'Team C',
        performance: 114,
        teacher: 100,
        student: 5
    },
    {
        name: 'Team D',
        performance: 120,
        teacher: 20,
        student: 25,
    },
    {
        name: 'Team E',
        performance: 150,
        teacher: 30,
        student: 25,
    },
    {
        name: 'Team F',
        performance: 100,
        teacher: 60,
        student: 50,
    },
];

export default class AdminHome extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/composed-chart-in-responsive-container-pkqmy';

    render() {
        return (
            <div style={{ width: '70%', height: 400, alignSelf: 'auto' }}>
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 100,
                        }}
                    >
                        <CartesianGrid stroke="black" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis allowDecimals='' />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="student" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="teacher" barSize={20} fill="black" />
                        <Line type="monotone" dataKey="performance" stroke="blue" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
