import { useNavigate } from "react-router-dom";

export default function CompanyCard({ company }) {
    const navigate = useNavigate();
    const positive = company.change.includes("+");

    return (
        
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
            <div className="flex items-center gap-4">

    <div className="text-4xl">

        {company.logo}

    </div>

    <div>

        <h2 className="text-xl font-bold">

            {company.name}

        </h2>

        <p className="text-gray-500">

            {company.symbol}

        </p>

    </div>

</div>
            <h2 className="text-2xl font-bold">

                {company.name}

            </h2>

            <p className="text-gray-500 mt-1">

                {company.symbol}

            </p>

            <p className="mt-3">

                {company.sector}

            </p>

            <h1 className="text-3xl font-bold mt-5">

                ₹ {company.price}

            </h1>

            <p
                className={`font-semibold mt-2 ${
                    positive
                        ? "text-green-600"
                        : "text-red-600"
                }`}
            >

                {company.change}

            </p>

            <p className="mt-4 text-gray-600">

                Market Cap : {company.marketCap}

            </p>

<button
    onClick={() => navigate(`/company/${company.id}`)}
    className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
>
    View Details
</button>
        </div>

    );
}