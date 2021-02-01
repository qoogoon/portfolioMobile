import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export interface CareerGraphData {
    name: string;
    level: number;
}
interface CareerGraphProps {
    data: CareerGraphData[]
    barColor?: string;
}

export default function CareerGraph(props: CareerGraphProps) {
    const { data, barColor } = props

    return <ResponsiveContainer width="95%" height="90%" >
        <BarChart
            layout={"vertical"}
            data={data}
            margin={{
                top: 0, right: 0, left: 30, bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis type={"category"} dataKey="name" />
            <XAxis type="number" domain={[0, 5]} ticks={[0, 20, 40, 60, 80, 100]} orientation={"top"} />
            <Tooltip />
            <Bar dataKey="level" fill={barColor} />
        </BarChart>
    </ResponsiveContainer>
}