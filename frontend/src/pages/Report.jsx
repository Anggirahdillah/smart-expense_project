import { useEffect, useState } from "react";

import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Sidebar from "../components/Sidebar";

import BASE_URL from "../config";

function Report() {

  const [income, setIncome] = useState("");
  const [month, setMonth] = useState("");

  const [reports, setReports] = useState([]);

  const token = localStorage.getItem("token");

  // GET REPORT
  const fetchReports = async () => {

    try {

      const response = await axios.get(
        `${BASE_URL}/report`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // pastikan array
      setReports(response.data.data || []);

    } catch (error) {

      console.log(error);

    }
  };

  // SAVE REPORT
  const saveReport = async () => {

    if (!month || !income) {
      return;
    }

    try {

      await axios.post(
        `${BASE_URL}/report`,
        {
          month,
          income: Number(income),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIncome("");
      setMonth("");

      fetchReports();

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchReports();

  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <div className="flex-1 p-4 md:p-10 mt-28 md:mt-0">

        {/* TITLE */}
        <h1
          className="
            text-4xl
            md:text-6xl
            font-bold
            text-teal-700
            mb-3
          "
        >
          Report
        </h1>

        <p
          className="
            text-gray-500
            mb-10
            text-lg
          "
        >
          Monthly income financial report
        </p>

        {/* INPUT CARD */}
        <div
          className="
            bg-white
            rounded-3xl
            p-6
            md:p-10
            shadow-sm
            mb-10
          "
        >

          <h1
            className="
              text-2xl
              md:text-4xl
              font-bold
              mb-8
            "
          >
            Input Monthly Income
          </h1>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-5
            "
          >

            {/* MONTH */}
            <select
              value={month}
              onChange={(e) =>
                setMonth(e.target.value)
              }
              className="
                border
                p-5
                rounded-2xl
                outline-none
              "
            >

              <option value="">
                Select month
              </option>

              <option>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
              <option>Apr</option>
              <option>May</option>
              <option>Jun</option>
              <option>Jul</option>
              <option>Aug</option>
              <option>Sep</option>
              <option>Oct</option>
              <option>Nov</option>
              <option>Dec</option>

            </select>

            {/* INPUT */}
            <input
              type="number"
              placeholder="Input income"
              value={income}
              onChange={(e) =>
                setIncome(e.target.value)
              }
              className="
                border
                p-5
                rounded-2xl
                outline-none
              "
            />

            {/* BUTTON */}
            <button
              onClick={saveReport}
              className="
                bg-teal-700
                text-white
                rounded-2xl
                font-semibold
                hover:bg-teal-800
                duration-300
              "
            >
              Save Data
            </button>

          </div>

        </div>

        {/* CHART */}
        <div
          className="
            bg-white
            rounded-3xl
            p-6
            md:p-10
            shadow-sm
          "
        >

          <h1
            className="
              text-2xl
              md:text-5xl
              font-bold
              text-teal-700
              mb-10
            "
          >
            Monthly Income Chart
          </h1>

          <div className="w-full h-[400px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart data={reports}>

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="income"
                  fill="#0f766e"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Report;