import {Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis,} from 'recharts';
import {FC} from "react";
import {IMoneyСhart} from "interfaces/Islices/IhospitalSurveySlice";

const MoneyСhart: FC<{ data: IMoneyСhart[] }> = ({data}) => {
    const bars = data.map(({inTotal}) =>
        <Cell key={inTotal} fill={inTotal > 0 ? 'green' : 'red'}/>
    );

    return (
        <ResponsiveContainer height={350} width={'99%'}>
            <BarChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="5 5"/>
                <XAxis dataKey="month"/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="inTotal">{bars}</Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MoneyСhart;
