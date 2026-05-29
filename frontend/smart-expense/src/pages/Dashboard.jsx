import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProgressCard from "../components/ProgressCard";
const [allocation, setAllocation] = useState(null);
import { useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config";

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
              `Bearer ${token}`
          }
        }
      );

      if (response.data.data.length > 0) {

        setAllocation(
          response.data.data[0]
        );

      }

    } catch (error) {

      console.log(error);

    }

  };

  fetchAllocation();

}, []);

  function Dashboard() {
    const [salary, setSalary] = useState(0);

    const kebutuhanPokok =
    allocation?.kebutuhanPokok || 0;

  const sekunder =
    allocation?.sekunder || 0;

  const tabungan =
    allocation?.tabungan || 0;


    const total =
  kebutuhanPokok +
  sekunder +
  tabungan;

const kebutuhanPercent =
  total > 0
    ? Math.round(
        (kebutuhanPokok / total) * 100
      )
    : 0;

const sekunderPercent =
  total > 0
    ? Math.round(
        (sekunder / total) * 100
      )
    : 0;

const tabunganPercent =
  total > 0
    ? Math.round(
        (tabungan / total) * 100
      )
    : 0;

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <div className="flex-1 p-10 bg-[#f5f7f8] min-h-screen">

        <Navbar />

        {/* WELCOME */}
        <div>
          <h1 className="text-5xl font-bold text-teal-800">
            Hello, James
          </h1>

          <p className="text-gray-500 mt-2 text-xl">
            Welcome back to your financial control center.
          </p>
        </div>

        {/* INPUT GAJI */}
        <div className="bg-white p-8 rounded-3xl shadow-sm mt-10">

          <h1 className="text-3xl font-bold mb-6">
            Input Gaji Bulanan
          </h1>

          <input
            type="number"
            placeholder="Masukkan gaji bulanan"
            value={salary === 0 ? "" : salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full border-2 border-gray-300 p-5 rounded-2xl text-2xl outline-none focus:border-teal-700"
          />

          <div className="mt-6">
            <p className="text-gray-500 text-xl">
              Total Gaji
            </p>

            <h1 className="text-5xl font-bold text-teal-700 mt-2">
              Rp {salary.toLocaleString("id-ID")}
            </h1>
          </div>

        </div>

        {/* TOP CARD */}
        <div className="grid grid-cols-3 gap-6 mt-10">

          {/* BALANCE */}
          <div className="col-span-2 bg-gradient-to-r from-teal-700 to-cyan-600 p-10 rounded-3xl text-white shadow-lg">

            <p className="text-2xl">
              Total Balance
            </p>

            <h1 className="text-7xl font-bold mt-4">
              Rp {salary.toLocaleString("id-ID")}
            </h1>

            <div className="flex gap-5 mt-10">

              {/* ADD INCOME */}
              <button
                onClick={() => setSalary(salary + 1000000)}
                className="bg-white/20 px-8 py-4 rounded-xl text-xl hover:bg-white/30 duration-300"
              >
                Add Income
              </button>

              {/* NEW EXPENSE */}
              <button
                onClick={() => setSalary(salary > 500000 ? salary - 500000 : 0)}
                className="border border-white px-8 py-4 rounded-xl text-xl hover:bg-white/20 duration-300"
              >
                New Expense
              </button>

            </div>
          </div>

          {/* SAVING CARD */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h1 className="text-2xl font-semibold text-gray-700">
              This Month Saving
            </h1>

            <p className="text-5xl font-bold text-teal-700 mt-6">
              Rp {tabungan.toLocaleString("id-ID")}
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full mt-8">

              <div className="w-[70%] h-3 bg-teal-700 rounded-full"></div>

            </div>

            <p className="mt-4 text-gray-500">
              70% of your monthly goal reached
            </p>

          </div>
        </div>

        {/* ALOKASI */}
        <h1 className="text-4xl font-bold mt-12 mb-6">
          Alokasi Saat Ini
        </h1>

        <div className="grid grid-cols-3 gap-6">

          <ProgressCard
            title="Kebutuhan Pokok"
            amount={`Rp ${kebutuhanPokok.toLocaleString("id-ID")}`}
            percent={kebutuhanPercent}
          />

          <ProgressCard
            title="Sekunder"
            amount={`Rp ${sekunder.toLocaleString("id-ID")}`}
            percent={sekunderPercent}
          />

          <ProgressCard
            title="Tabungan"
            amount={`Rp ${tabungan.toLocaleString("id-ID")}`}
            percent={tabunganPercent}
          />

        </div>

        {/* PENJELASAN */}
        <div className="bg-white rounded-3xl p-10 mt-10 shadow-sm">

          <h1 className="text-3xl font-bold mb-8 text-center">
            Penjelasan Alokasi Keuangan
          </h1>

          <div className="grid grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="bg-teal-700 text-white rounded-2xl p-6">
              <h1 className="text-2xl font-bold mb-4">
                Kebutuhan Pokok
              </h1>

              <p className="text-lg leading-relaxed">
                Pengeluaran wajib untuk kebutuhan sehari-hari
                seperti makan, transportasi, listrik,
                dan kebutuhan utama lainnya.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-amber-500 text-white rounded-2xl p-6">
              <h1 className="text-2xl font-bold mb-4">
                Kebutuhan Sekunder
              </h1>

              <p className="text-lg leading-relaxed">
                Pengeluaran tambahan untuk hiburan,
                lifestyle, nongkrong, belanja,
                dan kebutuhan pendukung lainnya.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-cyan-800 text-white rounded-2xl p-6">
              <h1 className="text-2xl font-bold mb-4">
                Tabungan
              </h1>

              <p className="text-lg leading-relaxed">
                Dana yang disisihkan untuk masa depan,
                dana darurat, investasi,
                dan tujuan finansial jangka panjang.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;