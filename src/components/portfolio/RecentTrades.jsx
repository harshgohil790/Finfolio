export default function RecentTrades({ trades }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-5">

                Recent Trades

            </h2>

            {

                trades.map(trade=>(

                    <div

                        key={trade.id}

                        className="flex justify-between py-4 border-b"

                    >

                        <div>

                            <h3 className="font-semibold">

                                {trade.company}

                            </h3>

                            <p className="text-gray-500">

                                Qty : {trade.quantity}

                            </p>

                        </div>

                        <div className="text-right">

                            <p

                                className={`font-semibold ${
                                    trade.type==="BUY"
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}

                            >

                                {trade.type}

                            </p>

                            <p>

                                {trade.amount}

                            </p>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}