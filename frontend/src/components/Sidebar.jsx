import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  const menuClass = (path) =>
    location.pathname === path
      ? "bg-white text-teal-800 font-semibold shadow-md"
      : "text-white hover:bg-teal-700";

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <div
        className="
          hidden
          md:flex
          w-[280px]
          bg-teal-900
          min-h-screen
          p-8
          flex-col
          justify-between
        "
      >

        {/* TOP */}
        <div>

          {/* LOGO */}
          <div className="mb-16 text-center">

            <h1
              className="
                text-5xl
                font-bold
                text-white
                leading-tight
              "
            >
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
              className={`
                px-6
                py-4
                rounded-2xl
                text-2xl
                duration-300
                ${menuClass("/dashboard")}
              `}
            >
              Dashboard
            </Link>

            <Link
              to="/allocation"
              className={`
                px-6
                py-4
                rounded-2xl
                text-2xl
                duration-300
                ${menuClass("/allocation")}
              `}
            >
              Alokasi
            </Link>

            <Link
              to="/report"
              className={`
                px-6
                py-4
                rounded-2xl
                text-2xl
                duration-300
                ${menuClass("/report")}
              `}
            >
              Laporan
            </Link>

          </div>

        </div>

        {/* PROFILE */}
        <div
          className="
            bg-teal-800
            p-5
            rounded-2xl
          "
        >

          <h1 className="text-white text-xl font-bold">
            {user?.name}
          </h1>

        </div>

      </div>

      {/* MOBILE NAVBAR */}
      <div
        className="
          md:hidden
          fixed
          top-0
          left-0
          w-full
          bg-teal-900
          z-50
          px-4
          py-4
          shadow-lg
        "
      >

        {/* LOGO */}
        <div className="text-center mb-4">

          <h1 className="text-2xl font-bold text-white">
            Smart Expense
          </h1>

        </div>

        {/* MENU */}
        <div className="flex justify-center gap-3">

          <Link
            to="/dashboard"
            className={`
              px-4
              py-2
              rounded-xl
              text-sm
              duration-300
              ${menuClass("/dashboard")}
            `}
          >
            Dashboard
          </Link>

          <Link
            to="/allocation"
            className={`
              px-4
              py-2
              rounded-xl
              text-sm
              duration-300
              ${menuClass("/allocation")}
            `}
          >
            Alokasi
          </Link>

          <Link
            to="/report"
            className={`
              px-4
              py-2
              rounded-xl
              text-sm
              duration-300
              ${menuClass("/report")}
            `}
          >
            Laporan
          </Link>

        </div>

      </div>
    </>
  );
}

export default Sidebar;