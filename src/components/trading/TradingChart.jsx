import {

ResponsiveContainer,

LineChart,

Line,

XAxis,

Tooltip,

CartesianGrid

} from "recharts";

import {

performance

} from "../../data/tradingData";

export default function TradingChart(){

return(

<div className="bg-white rounded-xl shadow-md p-6">

<h2 className="text-2xl font-bold mb-5">

Trading Activity

</h2>

<ResponsiveContainer
width="100%"
height={300}
>

<LineChart data={performance}>

<XAxis dataKey="month"/>

<CartesianGrid strokeDasharray="3 3"/>

<Tooltip/>

<Line

type="monotone"

dataKey="value"

stroke="#2563eb"

strokeWidth={3}

/>

</LineChart>

</ResponsiveContainer>

</div>

)

}