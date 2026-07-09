import StatCard from "../../components/common/StatCard";
import PortfolioChart from "../../components/charts/PortfolioChart";

import {
  dashboardStats,
  transactions,
} from "../../data/dashboardData";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Header */}

<div>

<h1 className="text-4xl font-bold text-gray-800">

Dashboard

</h1>

<p className="mt-2 text-gray-500">

Track your investments and monitor market performance.

</p>

</div>
      {/* Stat Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {dashboardStats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            color={item.color}
          />
        ))}

      </div>

      {/* Portfolio Chart */}

      <PortfolioChart />

      {/* Recent Transactions */}

      <div className="bg-white rounded-xl shadow-md p-6">

        <h2 className="text-2xl font-semibold mb-5">
          Recent Transactions
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b text-left">

              <th className="py-3">Company</th>

              <th>Type</th>

              <th>Amount</th>

            </tr>

          </thead>

          <tbody>

            {transactions.map((transaction) => (

              <tr
                key={transaction.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="py-4 font-medium">

                  {transaction.company}

                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      transaction.type === "BUY"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >

                    {transaction.type}

                  </span>

                </td>

                <td className="font-semibold">

                  {transaction.amount}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}