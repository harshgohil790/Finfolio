export default function FinancialSummary({ company }) {

    const items = [

        ["Revenue", company.revenue],

        ["Net Profit", company.profit],

        ["Assets", company.assets],

        ["Liabilities", company.liabilities]

    ];

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-5">

                Financial Summary

            </h2>

            <div className="grid grid-cols-2 gap-5">

                {

                    items.map(([title, value]) => (

                        <div key={title}>

                            <p className="text-gray-500">

                                {title}

                            </p>

                            <h2 className="font-semibold mt-2">

                                {value}

                            </h2>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}