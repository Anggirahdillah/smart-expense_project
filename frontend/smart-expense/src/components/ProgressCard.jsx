function ProgressCard({ title, amount, percent }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm w-full">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <span className="text-teal-700 font-bold">{percent}%</span>
      </div>

      <p className="text-3xl font-bold text-gray-700">{amount}</p>

      <div className="w-full bg-gray-200 h-3 rounded-full mt-5">
        <div
          className="bg-teal-700 h-3 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressCard