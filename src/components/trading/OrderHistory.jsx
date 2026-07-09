export default function OrderHistory({

orders

}){

return(

<div className="bg-white rounded-xl shadow-md p-6">

<h2 className="text-2xl font-bold mb-5">

Order History

</h2>

<table className="w-full">

<thead>

<tr className="border-b">

<th className="py-3 text-left">

Company

</th>

<th>

Type

</th>

<th>

Qty

</th>

<th>

Status

</th>

</tr>

</thead>

<tbody>

{

orders.map(order=>(

<tr

key={order.id}

className="border-b"

>

<td className="py-4">

{order.company}

</td>

<td>

<span

className={`font-semibold ${

order.type==="BUY"

?

"text-green-600"

:

"text-red-600"

}`}

>

{order.type}

</span>

</td>

<td>

{order.qty}

</td>

<td>

{order.status}

</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}