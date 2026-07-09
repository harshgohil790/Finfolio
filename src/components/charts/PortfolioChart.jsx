import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { month: "Jan", value: 800000 },
  { month: "Feb", value: 870000 },
  { month: "Mar", value: 910000 },
  { month: "Apr", value: 990000 },
  { month: "May", value: 1120000 },
  { month: "Jun", value: 1245320 },
];

export default function PortfolioChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">

      <h2 className="text-2xl font-semibold mb-5">

        Portfolio Performance

      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <AreaChart data={data}>

          <defs>

            <linearGradient
              id="colorValue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#2563eb"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#2563eb"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <XAxis dataKey="month" />

          <CartesianGrid strokeDasharray="3 3" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            fillOpacity={1}
            fill="url(#colorValue)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}