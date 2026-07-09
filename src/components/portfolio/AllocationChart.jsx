import {

PieChart,

Pie,

Cell,

ResponsiveContainer,

Tooltip

} from "recharts";

const data=[

{ name:"Apple", value:35 },

{ name:"Microsoft", value:25 },

{ name:"Tesla", value:20 },

{ name:"Amazon", value:20 }

];

const COLORS=[

"#2563eb",

"#16a34a",

"#f59e0b",

"#dc2626"

];

export default function AllocationChart(){

return(

<div className="bg-white rounded-xl shadow-md p-6">

<h2 className="text-2xl font-bold mb-5">

Portfolio Allocation

</h2>

<ResponsiveContainer
width="100%"
height={350}
>

<PieChart>

<Pie

data={data}

dataKey="value"

nameKey="name"

outerRadius={120}

label

>

{

data.map((entry,index)=>(

<Cell

key={index}

fill={COLORS[index]}

/>

))

}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

)

}