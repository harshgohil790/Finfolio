export default function OrderSummary(){

return(

<div className="bg-white rounded-xl shadow-md p-6">

<h2 className="text-2xl font-bold mb-5">

Trading Summary

</h2>

<div className="grid grid-cols-2 gap-6">

<div>

<p className="text-gray-500">

Today's Orders

</p>

<h2 className="text-3xl font-bold">

24

</h2>

</div>

<div>

<p className="text-gray-500">

Completed

</p>

<h2 className="text-3xl font-bold text-green-600">

18

</h2>

</div>

<div>

<p className="text-gray-500">

Pending

</p>

<h2 className="text-3xl font-bold text-orange-600">

6

</h2>

</div>

<div>

<p className="text-gray-500">

Volume

</p>

<h2 className="text-3xl font-bold">

₹12.4L

</h2>

</div>

</div>

</div>

)

}