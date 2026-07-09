export default function QuickStats({ company }) {

    const stats = [

        {
            title: "Market Cap",
            value: company.marketCap
        },

        {
            title: "P/E Ratio",
            value: company.peRatio
        },

        {
            title: "EPS",
            value: company.eps
        },

        {
            title: "Founded",
            value: company.founded
        }

    ];

    return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {

                stats.map(stat => (

                    <div

                        key={stat.title}

                        className="bg-white rounded-xl shadow-md p-5"

                    >

                        <p className="text-gray-500">

                            {stat.title}

                        </p>

                        <h2 className="font-bold mt-2">

                            {stat.value}

                        </h2>

                    </div>

                ))

            }

        </div>

    );

}