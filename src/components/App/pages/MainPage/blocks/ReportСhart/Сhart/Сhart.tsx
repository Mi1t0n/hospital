import style from './Сhart.module.scss';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {IСhart} from "interfaces/IComponents/IСhart";
import HartFooter from "./СhartFooter/СhartFooter";
import {FC} from "react";
import BlockTitle from "components/shared/BlockTitle/BlockTitle";

const Hart: FC<IСhart> = ({data, title, color, month}) =>
    (<div className={style.block}>
        <BlockTitle title={title}/>
        <ResponsiveContainer width="99.5%" height={200}>
            <LineChart width={300} height={100} data={data}>
                <Tooltip label='name'/>
                <CartesianGrid strokeDasharray="10 10"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Line type="monotone" dataKey="inTotal" stroke={color} strokeWidth={3} activeDot={{r: 8}}/>
            </LineChart>
        </ResponsiveContainer>
        <HartFooter {...month}/>
    </div>)

export default Hart;
