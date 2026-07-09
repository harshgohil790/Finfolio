import { useState, useEffect } from "react";

export default function BuyCard({ stocks }) {

    const [selectedId, setSelectedId] = useState(stocks[0].id);
    const [qty, setQty] = useState(1);

    const stock = stocks.find(s => s.id === selectedId);

    const total = (stock.price * qty).toFixed(2);

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-6">

                Buy Stock

            </h2>

            <select

                className="w-full border rounded-lg p-3"

                value={selectedId}

                onChange={(e)=>setSelectedId(Number(e.target.value))}

            >

                {

                    stocks.map(stock=>(

                        <option

                            key={stock.id}

                            value={stock.id}

                        >

                            {stock.name}

                        </option>

                    ))

                }

            </select>

            <input

                className="w-full border rounded-lg p-3 mt-4"

                type="number"

                min="1"

                value={qty}

                onChange={(e)=>setQty(Number(e.target.value))}

            />

            <div className="mt-5 space-y-2">

                <p>

                    Price : ₹ {stock.price}

                </p>

                <p className="font-bold">

                    Total : ₹ {total}

                </p>

            </div>

            <button

                className="mt-6 w-full bg-green-600 text-white rounded-lg py-3 hover:bg-green-700"

            >

                Buy Stock

            </button>

        </div>

    )

}