import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 min-h-screen">

      {/* LEFT SIDE */}
      <div className="bg-teal-700 text-white p-14 flex flex-col justify-center">

        <h1 className="text-6xl font-bold leading-tight">
          Master your money with calm authority.
        </h1>

        <p className="mt-8 text-2xl text-gray-100 leading-relaxed">
          Start your journey to financial freedom today.
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center items-center bg-white">

        <div className="w-[450px]">

          <h1 className="text-5xl font-bold mb-3">
            Create Account
          </h1>

          <p className="text-gray-500 mb-10">
            Create your Smart Expense account
          </p>

          <div className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Full Name"
              className="border p-5 rounded-xl text-lg"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-5 rounded-xl text-lg"
            />

            <input
              type="password"
              placeholder="Password"
              className="border p-5 rounded-xl text-lg"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-5 rounded-xl text-lg"
            />

            <button
              onClick={() => navigate("/dashboard")}
              className="bg-teal-700 text-white p-5 rounded-xl text-xl font-semibold hover:bg-teal-800"
            >
              Sign Up
            </button>

            <p className="text-center">
              Already have an account?

              <Link
                to="/"
                className="text-teal-700 font-bold ml-2"
              >
                Sign In
              </Link>

            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;