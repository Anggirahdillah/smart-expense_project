import { Link, useLocation } from "react-router-dom"

function Sidebar() {
  const location = useLocation()

  const menuClass = (path) =>
    location.pathname === path
      ? "bg-white text-teal-800 font-semibold shadow-md"
      : "text-white hover:bg-teal-700"

  return (
    <div className="w-[280px] bg-teal-900 min-h-screen p-8 flex flex-col justify-between">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="mb-16">

          <h1 className="text-5xl font-bold text-white leading-tight">
            Smart
            <br />
            Expense
          </h1>

          <p className="text-gray-200 text-lg mt-2">
            Personal Finance
          </p>

        </div>

        {/* MENU */}
        <div className="flex flex-col gap-5">

          <Link
            to="/dashboard"
            className={`px-6 py-4 rounded-2xl text-2xl duration-300 ${menuClass("/dashboard")}`}
          >
            Dashboard
          </Link>

          <Link
            to="/allocation"
            className={`px-6 py-4 rounded-2xl text-2xl duration-300 ${menuClass("/allocation")}`}
          >
            Alokasi
          </Link>

          <Link
            to="/report"
            className={`px-6 py-4 rounded-2xl text-2xl duration-300 ${menuClass("/report")}`}
          >
            Laporan
          </Link>

        </div>

      </div>

      {/* PROFILE */}
      <div className="bg-teal-800 p-5 rounded-2xl">

        <h1 className="text-white text-xl font-bold">
          James Wilson
        </h1>

        <p className="text-gray-300 text-sm">
          Premium Member
        </p>

      </div>

    </div>
  )
}

export default Sidebar