import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Report() {

  // DATA BULAN
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ags",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  // STATE INPUT
  const [month, setMonth] = useState("Jan");
  const [income, setIncome] = useState("");

  // AMBIL DATA DARI LOCAL STORAGE
  const [chartData, setChartData] = useState(() => {
    const saved = localStorage.getItem("financeData");

    return saved
      ? JSON.parse(saved)
      : [
          { month: "Jan", value: 0 },
          { month: "Feb", value: 0 },
          { month: "Mar", value: 0 },
          { month: "Apr", value: 0 },
          { month: "Mei", value: 0 },
          { month: "Jun", value: 0 },
          { month: "Jul", value: 0 },
          { month: "Ags", value: 0 },
          { month: "Sep", value: 0 },
          { month: "Okt", value: 0 },
          { month: "Nov", value: 0 },
          { month: "Des", value: 0 },
        ];
  });

  // SIMPAN KE LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("financeData", JSON.stringify(chartData));
  }, [chartData]);

  // TAMBAH DATA
  const handleAddData = () => {
    if (!income) return;

    const updated = chartData.map((item) => {
      if (item.month === month) {
        return {
          ...item,
          value: Number(income),
        };
      }

      return item;
    });

    setChartData(updated);
    setIncome("");
  };

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <div className="flex-1 bg-[#f5f7f8] p-10 min-h-screen">

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-teal-800">
          Laporan Strategis
        </h1>

        <p className="text-gray-500 text-xl mt-2">
          Analisis pemasukan setiap bulan
        </p>

        {/* INPUT */}
        <div className="bg-white rounded-3xl p-8 shadow-sm mt-10">

          <h1 className="text-3xl font-bold mb-6">
            Input Pendapatan Bulanan
          </h1>

          <div className="grid grid-cols-3 gap-5">

            {/* PILIH BULAN */}
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="border-2 border-gray-300 rounded-2xl p-5 text-xl"
            >
              {months.map((m, index) => (
                <option key={index}>
                  {m}
                </option>
              ))}
            </select>

            {/* INPUT GAJI */}
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Masukkan pendapatan"
              className="border-2 border-gray-300 rounded-2xl p-5 text-xl"
            />

            {/* BUTTON */}
            <button
              onClick={handleAddData}
              className="bg-teal-700 text-white rounded-2xl text-xl font-semibold hover:bg-teal-800 duration-300"
            >
              Simpan Data
            </button>

          </div>

        </div>

        {/* GRAFIK */}
        <div className="bg-white rounded-3xl p-10 mt-10 shadow-sm">

          <h1 className="text-4xl font-bold text-teal-700 mb-12">
            Grafik Pendapatan Perbulan
          </h1>

          {/* CHART */}
          <div className="flex items-end justify-between h-[450px] gap-4">

            {chartData.map((item, index) => (

              <div
                key={index}
                className="flex flex-col items-center w-full"
              >

                {/* BATANG */}
                <div
                  className="w-full bg-teal-700 rounded-t-xl hover:bg-teal-800 duration-300"
                  style={{
                    height: `${item.value / 100000}px`,
                  }}
                ></div>

                {/* NOMINAL */}
                <p className="text-sm mt-3 font-semibold text-gray-500">
                  {(item.value / 1000000).toFixed(0)}jt
                </p>

                {/* BULAN */}
                <p className="mt-2 text-lg font-bold text-teal-700">
                  {item.month}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* CARD ANALISIS */}
        <div className="grid grid-cols-3 gap-6 mt-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h1 className="text-3xl font-bold text-teal-700 mb-5">
              Optimasi Gaji
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Berdasarkan pendapatan saat ini,
              pengeluaran hiburan dapat dikurangi
              untuk meningkatkan tabungan.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h1 className="text-3xl font-bold text-teal-700 mb-5">
              Audit Pengeluaran
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Pendapatan bulanan dapat dianalisis
              untuk mengetahui kestabilan finansial.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-teal-700 text-white rounded-3xl p-8 shadow-sm">
            <h1 className="text-3xl font-bold mb-5">
              Rekomendasi AI
            </h1>

            <p className="text-lg leading-relaxed">
              Sistem merekomendasikan pembagian
              50/30/20 agar kondisi finansial tetap stabil.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Report;