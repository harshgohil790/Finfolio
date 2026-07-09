export default function HoldingCard({ stock }) {

    const positive = stock.profit.includes("+");

    return (

        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5">

            <div className="flex items-center gap-3">

                <div className="text-4xl">

                    {stock.logo}

                </div>

                <div>

                    <h2 className="font-bold">

                        {stock.company}

                    </h2>

                    <p className="text-gray-500">

                        {stock.symbol}

                    </p>

                </div>

            </div>

            <div className="mt-5 space-y-2">

                <p>

                    Shares : {stock.shares}

                </p>

                <p>

                    Avg Price : {stock.avgPrice}

                </p>

                <p>

                    Current : {stock.currentPrice}

                </p>

                <p
                    className={`font-bold ${
                        positive
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                >

                    {stock.profit}

                </p>

            </div>

        </div>

    );

}