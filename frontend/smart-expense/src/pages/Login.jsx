import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 min-h-screen">

      {/* LEFT SIDE */}
      <div className="bg-teal-700 text-white flex flex-col justify-center items-center">

        {/* WRAPPER */}
        <div className="flex flex-col items-center -mt-10">

          {/* LOGO */}
          <img
            src={Logo}
            alt="logo"
            className="w-[650px] object-contain drop-shadow-2xl"
          />

          {/* TITLE */}
          <h1 className="text-7xl font-bold text-center -mt-20">
            Smart Expense
          </h1>

          {/* SUBTITLE */}
          <p className="text-3xl text-gray-100 mt-5 text-center w-[75%] leading-relaxed">
            Manage your finances smarter, easier, and more organized.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center items-center bg-white">

        <div className="w-[450px]">

          <h1 className="text-5xl font-bold mb-3 leading-tight">
            Sign In to Smart Expense
          </h1>

          <p className="text-gray-500 mb-10 text-lg">
            Welcome back! Please enter your details.
          </p>

          <div className="flex flex-col gap-5">

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="border-2 border-gray-200 p-5 rounded-2xl text-lg outline-none focus:border-teal-600 duration-300"
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-gray-200 p-5 rounded-2xl text-lg outline-none focus:border-teal-600 duration-300"
            />

            {/* BUTTON */}
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-teal-700 hover:bg-teal-800 duration-300 text-white p-5 rounded-2xl text-xl font-semibold shadow-lg"
            >
              Sign In
            </button>

            {/* REGISTER */}
            <p className="text-center text-lg">
              Don't have an account?

              <Link
                to="/register"
                className="text-teal-700 font-bold ml-2 hover:underline"
              >
                Register
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;