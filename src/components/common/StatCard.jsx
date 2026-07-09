export default function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer">

      <p className="text-gray-500">

        {title}

      </p>

      <h1
        className={`text-3xl font-bold mt-4 ${color}`}
      >

        {value}

      </h1>

    </div>
  );
}