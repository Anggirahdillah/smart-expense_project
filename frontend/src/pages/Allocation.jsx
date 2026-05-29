import { useEffect, useState } from "react";

import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import BASE_URL from "../config";

function Allocation() {

  const [salary, setSalary] = useState(0);

  // PERSENTASE
  const [kebutuhanPokok, setKebutuhanPokok] =
    useState(0);

  const [sekunder, setSekunder] =
    useState(0);

  const [tabungan, setTabungan] =
    useState(0);

  // GET DATA
  useEffect(() => {

    const fetchAllocation = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const response = await axios.get(
          `${BASE_URL}/api/allocation`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchAllocation();

  }, []);

  // SAVE ALLOCATION
  const handleSaveAllocation = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response = await axios.post(
          `${BASE_URL}/api/allocation/calculate`,
          {
            salary,
          },
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        const data = response.data.data;

        const total =
          data.kebutuhanPokok +
          data.sekunder +
          data.tabungan;

        setKebutuhanPokok(
          Math.round(
            (data.kebutuhanPokok / total) * 100
          )
        );

        setSekunder(
          Math.round(
            (data.sekunder / total) * 100
          )
        );

        setTabungan(
          Math.round(
            (data.tabungan / total) * 100
          )
        );

        alert("Alokasi berhasil disimpan");

    } catch (error) {

      console.log(error);

    }
  };

  // HITUNG NOMINAL
  const kebutuhanPokokNominal =
    salary * (kebutuhanPokok / 100);

  const sekunderNominal =
    salary * (sekunder / 100);

  const tabunganNominal =
    salary * (tabungan / 100);

  // DATA CHART
  const data = [
    {
      name: "Kebutuhan Pokok",
      value: kebutuhanPokokNominal,
    },
    {
      name: "Kebutuhan Sekunder",
      value: sekunderNominal,
    },
    {
      name: "Tabungan",
      value: tabunganNominal,
    },
  ];

  // WARNA
  const COLORS = [
    "#14b8a6",
    "#fbbf24",
    "#115e59",
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-[#f5f7f8] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <div className="flex-1 p-4 md:p-10">

        {/* NAVBAR */}
        <Navbar />

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div>

            <h1 className="text-4xl md:text-6xl font-bold text-teal-700">
              Alokasi Dana
            </h1>

            <p className="text-gray-500 text-lg md:text-2xl mt-3">
              Atur pembagian keuangan bulanan Anda
            </p>

          </div>

          {/* BUTTON */}
          <button
            onClick={handleSaveAllocation}
            className="
              bg-teal-700
              text-white
              px-8
              py-4
              rounded-2xl
              text-lg
              font-semibold
              shadow-lg
              hover:bg-teal-800
              duration-300
            "
          >
            Simpan Rencana
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

          {/* LEFT */}
          <div
            className="
              bg-white
              rounded-[40px]
              p-6
              md:p-10
              shadow-sm
            "
          >

            <h1
              className="
                text-3xl
                md:text-5xl
                font-bold
                text-teal-700
                mb-10
              "
            >
              Jumlah Rasio
            </h1>

            {/* INPUT */}
            <div>

              <h2
                className="
                  text-2xl
                  md:text-4xl
                  font-bold
                  text-teal-700
                  mb-5
                "
              >
                Input Gaji Bulanan
              </h2>

              <input
                type="number"
                value={salary === 0 ? "" : salary}
                onChange={(e) =>
                  setSalary(Number(e.target.value))
                }
                placeholder="Masukkan gaji"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-3xl
                  p-5
                  text-2xl
                  outline-none
                  focus:border-teal-600
                "
              />

            </div>

            {/* KEBUTUHAN POKOK */}
            <div className="mt-14">

              <div className="flex justify-between items-center mb-5">

                <h1 className="text-2xl md:text-4xl font-bold text-teal-700">
                  Kebutuhan Pokok
                </h1>

                <span className="text-2xl md:text-4xl font-bold text-teal-700">
                  {kebutuhanPokok}%
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-6">

                <div
                  className="bg-teal-500 h-6 rounded-full"
                  style={{
                    width: `${kebutuhanPokok}%`,
                  }}
                ></div>

              </div>

              <p className="mt-5 text-2xl md:text-4xl font-bold text-teal-700">

                Rp {kebutuhanPokokNominal.toLocaleString("id-ID")}

              </p>

            </div>

            {/* SEKUNDER */}
            <div className="mt-14">

              <div className="flex justify-between items-center mb-5">

                <h1 className="text-2xl md:text-4xl font-bold text-yellow-500">
                  Kebutuhan Sekunder
                </h1>

                <span className="text-2xl md:text-4xl font-bold text-yellow-500">
                  {sekunder}%
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-6">

                <div
                  className="bg-yellow-400 h-6 rounded-full"
                  style={{
                    width: `${sekunder}%`,
                  }}
                ></div>

              </div>

              <p className="mt-5 text-2xl md:text-4xl font-bold text-yellow-500">

                Rp {sekunderNominal.toLocaleString("id-ID")}

              </p>

            </div>

            {/* TABUNGAN */}
            <div className="mt-14">

              <div className="flex justify-between items-center mb-5">

                <h1 className="text-2xl md:text-4xl font-bold text-teal-900">
                  Tabungan
                </h1>

                <span className="text-2xl md:text-4xl font-bold text-teal-900">
                  {tabungan}%
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-6">

                <div
                  className="bg-teal-800 h-6 rounded-full"
                  style={{
                    width: `${tabungan}%`,
                  }}
                ></div>

              </div>

              <p className="mt-5 text-2xl md:text-4xl font-bold text-teal-900">

                Rp {tabunganNominal.toLocaleString("id-ID")}

              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div
            className="
              bg-white
              rounded-[40px]
              p-6
              md:p-10
              shadow-sm
              flex
              flex-col
              items-center
              justify-center
            "
          >

            <h1
              className="
                text-3xl
                md:text-5xl
                font-bold
                text-teal-700
                mb-10
              "
            >
              Visualisasi Dana
            </h1>

            <div className="w-full h-[500px]">

              <ResponsiveContainer>

                <PieChart>

                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={150}
                    label
                  >

                    {data.map((entry, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />

                    ))}

                  </Pie>

                  <Tooltip />

                  <Legend />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Allocation;