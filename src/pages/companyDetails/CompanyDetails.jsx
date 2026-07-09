import QuickStats from "../../components/companyDetails/QuickStats";
import { useNavigate, useParams } from "react-router-dom";

import companyDetails from "../../data/companyDetails";

import CompanyInfo from "../../components/companyDetails/CompanyInfo";
import FinancialSummary from "../../components/companyDetails/FinancialSummary";
import PortfolioChart from "../../components/charts/PortfolioChart";

export default function CompanyDetails() {

    const navigate = useNavigate();

    const { id } = useParams();

    // Later we'll fetch by id from backend
    const company = companyDetails;

    return (

        <div className="space-y-8">

            <button

                onClick={() => navigate(-1)}

                className="text-blue-600 hover:underline"

            >

                ← Back to Companies

            </button>

            <div className="bg-white rounded-xl shadow-md p-6">

                <div className="flex justify-between items-center">

                    <div>

                        <h1 className="text-4xl font-bold">

                            {company.name}

                        </h1>

                        <p className="text-gray-500 mt-2">

                            {company.sector}

                        </p>

                    </div>

                    <div className="text-right">

                        <h2 className="text-4xl font-bold">

                            {company.price}

                        </h2>

                        <p className="text-green-600 font-semibold mt-2">

                            {company.change}

                        </p>

                    </div>

                </div>

            </div>
            <QuickStats company={company} />
            <PortfolioChart />

            <CompanyInfo company={company} />

            <FinancialSummary company={company} />

        </div>

    );

}