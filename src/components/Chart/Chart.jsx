import React from 'react'
import { dataChart } from '../../data';
import { BarChart, Bar, XAxis, YAxis,  Tooltip,  ResponsiveContainer } from 'recharts';
const Chart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
                width={300}
                height={300}
                data={dataChart}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis  />
                <Tooltip />
                <Bar dataKey="pv" fill="#504178" background={{ fill: '#EDE7FD' }} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Chart