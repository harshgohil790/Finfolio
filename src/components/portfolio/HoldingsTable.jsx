export default function HoldingsTable({ holdings }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">

            <h2 className="text-2xl font-bold mb-6">

                Holdings

            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b text-left">

                        <th className="py-3">Company</th>

                        <th>Qty</th>

                        <th>Avg Price</th>

                        <th>Current</th>

                        <th>P/L</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        holdings.map(stock=>(

                            <tr

                                key={stock.id}

                                className="border-b hover:bg-gray-50"

                            >

                                <td className="py-4">

                                    {stock.company}

                                </td>

                                <td>

                                    {stock.shares}

                                </td>

                                <td>

                                    {stock.avgPrice}

                                </td>

                                <td>

                                    {stock.currentPrice}

                                </td>

                                <td

                                    className={`font-semibold ${
                                        stock.profit.includes("+")
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}

                                >

                                    {stock.profit}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}