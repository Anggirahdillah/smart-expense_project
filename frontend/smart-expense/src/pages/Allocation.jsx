import Sidebar from "../components/Sidebar"
import { useState } from "react"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

function Allocation() {
  const [salary, setSalary] = useState(0)

  const kebutuhanPokok = salary * 0.5
  const sekunder = salary * 0.3
  const tabungan = salary * 0.2

  const handleSave = () => {
    alert("Rencana keuangan berhasil disimpan!")
  }

  const data = [
    {
      name: "Kebutuhan Pokok",
      value: kebutuhanPokok,
    },
    {
      name: "Kebutuhan Sekunder",
      value: sekunder,
    },
    {
      name: "Tabungan",
      value: tabungan,
    },
  ]

  const COLORS = [
    "#14b8a6",
    "#fbbf24",
    "#0f766e",
  ]

  return (
    <div className="flex bg-[#f5f7f8] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <div className="flex-1 p-10">

        {/* HEADER */}
        <div className="flex justify-between items-start">

          <div>
            <h1 className="text-6xl font-bold text-teal-800">
              Alokasi Dana
            </h1>

            <p className="text-gray-500 text-2xl mt-3">
              Atur pembagian keuangan bulanan Anda
            </p>
          </div>

          <button
            onClick={handleSave}
            className="bg-teal-700 hover:bg-teal-800 duration-300 text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-md"
          >
            Simpan Rencana
          </button>

        </div>

        {/* CARD BESAR */}
        <div className="grid grid-cols-2 gap-8 mt-10">

          {/* LEFT */}
          <div className="bg-[#d9d9d9] rounded-[40px] p-10">

            <h1 className="text-5xl font-bold text-teal-700 mb-10">
              Jumlah Rasio
            </h1>

            {/* INPUT */}
            <div>

              <h2 className="text-3xl font-bold text-teal-700 mb-5">
                Input Gaji Bulanan
              </h2>

              <input
                type="number"
                placeholder="Masukkan gaji bulanan"
                value={salary === 0 ? "" : salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full border-2 border-gray-200 rounded-3xl p-6 text-3xl outline-none"
              />

            </div>

            {/* KEBUTUHAN POKOK */}
            <div className="mt-14">

              <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl font-bold text-teal-700">
                  Kebutuhan Pokok
                </h1>

                <p className="text-4xl font-bold text-teal-700">
                  50%
                </p>
              </div>

              <div className="w-full h-8 bg-white rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-teal-500 rounded-full"></div>
              </div>

              <p className="text-3xl font-bold text-teal-800 mt-5">
                Rp {kebutuhanPokok.toLocaleString("id-ID")}
              </p>

            </div>

            {/* SEKUNDER */}
            <div className="mt-14">

              <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl font-bold text-teal-700">
                  Kebutuhan Sekunder
                </h1>

                <p className="text-4xl font-bold text-teal-700">
                  30%
                </p>
              </div>

              <div className="w-full h-8 bg-white rounded-full overflow-hidden">
                <div className="w-[30%] h-full bg-amber-400 rounded-full"></div>
              </div>

              <p className="text-3xl font-bold text-teal-800 mt-5">
                Rp {sekunder.toLocaleString("id-ID")}
              </p>

            </div>

            {/* TABUNGAN */}
            <div className="mt-14">

              <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl font-bold text-teal-700">
                  Tabungan
                </h1>

                <p className="text-4xl font-bold text-teal-700">
                  20%
                </p>
              </div>

              <div className="w-full h-8 bg-white rounded-full overflow-hidden">
                <div className="w-[20%] h-full bg-cyan-800 rounded-full"></div>
              </div>

              <p className="text-3xl font-bold text-teal-800 mt-5">
                Rp {tabungan.toLocaleString("id-ID")}
              </p>

            </div>

            {/* TOTAL RASIO */}
            <div className="mt-20">

              <h1 className="text-4xl font-bold text-teal-700 mb-6">
                TOTAL RASIO
              </h1>

              <div className="w-full h-10 rounded-full overflow-hidden flex">

                <div className="w-1/2 bg-teal-500"></div>

                <div className="w-[30%] bg-amber-400"></div>

                <div className="w-[20%] bg-cyan-800"></div>

              </div>

            </div>

          </div>

          {/* RIGHT PIE CHART */}
          <div className="bg-white rounded-[40px] p-10 h-[700px]">

            <h1 className="text-5xl font-bold text-teal-700 text-center mb-10">
              Visualisasi Dana
            </h1>

            <ResponsiveContainer width="100%" height={400}>

              <PieChart>

                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={140}
                  dataKey="value"
                  label
                >

                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

            <div className="mt-10 space-y-5 text-2xl">

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
                <p>Kebutuhan Pokok (50%)</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-amber-400 rounded-full"></div>
                <p>Kebutuhan Sekunder (30%)</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-cyan-800 rounded-full"></div>
                <p>Tabungan (20%)</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Allocation