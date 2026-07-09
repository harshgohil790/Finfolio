import StatCard from "../common/StatCard";

export default function PortfolioSummary({ summary }) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard

                title="Portfolio Value"

                value={summary.totalValue}

                color="text-blue-600"

            />

            <StatCard

                title="Today's Gain"

                value={summary.todayGain}

                color="text-green-600"

            />

            <StatCard

                title="Available Cash"

                value={summary.cash}

                color="text-purple-600"

            />

            <StatCard

                title="Holdings"

                value={summary.holdings}

                color="text-orange-600"

            />

        </div>

    );

}