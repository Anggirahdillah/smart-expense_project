import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProgressCard from "../components/ProgressCard";

import BASE_URL from "../config";

function Dashboard() {

  const [salary, setSalary] = useState(0);

  const [kebutuhanPokok, setKebutuhanPokok] =
    useState(0);

  const [sekunder, setSekunder] =
    useState(0);

  const [tabungan, setTabungan] =
    useState(0);

  const [nominalPokok, setNominalPokok] =
  useState(0);

const [nominalSekunder, setNominalSekunder] =
  useState(0);

const [nominalTabungan, setNominalTabungan] =
  useState(0);

  const user =
      JSON.parse(
        localStorage.getItem("user")
      );
  
  // FETCH DASHBOARD
  useEffect(() => {

  const fetchDashboard = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response = await axios.get(
        `${BASE_URL}/api/allocation/latest`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      const data =
        response.data.data;

      if (!data) return;

      const total =
        data.kebutuhanPokok +
        data.sekunder +
        data.tabungan;

      setSalary(data.salary);
      setNominalPokok(
        data.kebutuhanPokok
      );

      setNominalSekunder(
        data.sekunder
      );

      setNominalTabungan(
        data.tabungan
      );

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

    } catch (error) {

      console.log(error);

    }
  };

  fetchDashboard();

}, []);


  // AI RECOMMENDATION
 const handleAIRecommendation = async () => {

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

  const data =
    response.data.data;

    setNominalPokok(
      data.kebutuhanPokok
    );

    setNominalSekunder(
      data.sekunder
    );

    setNominalTabungan(
      data.tabungan
    );


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

  } catch (error) {

    console.log(error);

  }
};


  return (
    <div className="flex flex-col lg:flex-row">

      <Sidebar />

<div className="flex-1 p-4 md:p-10 mt-28 md:mt-0">
        <Navbar />

        {/* WELCOME */}
        <div>

          <h1 className="text-3xl md:text-5xl font-bold text-teal-800">
            Hello, {user?.name || "User"}
          </h1>

          <p className="text-gray-500 mt-2 text-base md:text-xl">
            Welcome back to your financial control center.
          </p>

        </div>

        {/* INPUT */}
        <div className="bg-white p-5 md:p-8 rounded-3xl shadow-sm mt-10">

          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Input Gaji Bulanan
          </h1>

          <input
            type="number"
            placeholder="Masukkan gaji bulanan"
            value={salary === 0 ? "" : salary}
            onChange={(e) =>
              setSalary(Number(e.target.value))
            }
            className="
              w-full
              border-2
              border-gray-300
              p-4
              md:p-5
              rounded-2xl
              text-lg
              md:text-2xl
              outline-none
              focus:border-teal-700
            "
          />

          <button
            onClick={handleAIRecommendation}
            className="
              mt-6
              bg-teal-700
              text-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:bg-teal-800
            "
          >
            Generate AI Recommendation
          </button>

        </div>

        {/* ALOKASI */}
        <h1 className="text-2xl md:text-4xl font-bold mt-12 mb-6">
          Alokasi Saat Ini
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

         <ProgressCard
          title="Kebutuhan Pokok"
          amount={`Rp ${nominalPokok.toLocaleString("id-ID")}`}
          percent={kebutuhanPokok}
        />

          <ProgressCard
          title="Sekunder"
          amount={`Rp ${nominalSekunder.toLocaleString("id-ID")}`}
          percent={sekunder}
        />

          <ProgressCard
        title="Tabungan"
        amount={`Rp ${nominalTabungan.toLocaleString("id-ID")}`}
        percent={tabungan}
      />

        </div>

      </div>
    </div>
  );
}

export default Dashboard;