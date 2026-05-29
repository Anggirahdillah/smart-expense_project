import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import logo from "../assets/Logo.png";
import BASE_URL from "../config";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      navigate("/dashboard");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Login gagal"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex overflow-hidden">

      {/* LEFT SIDE */}
      <div
        className="
          hidden
          md:flex
          w-1/2
          bg-gradient-to-br
          from-teal-700
          to-cyan-700
          flex-col
          items-center
          justify-center
          text-center
          px-10
        "
      >

        {/* LOGO + TITLE */}
        <div className="flex flex-col items-center -mt-32">

          <img
            src={logo}
            alt="logo"
            className="
              h-[260px]
              lg:h-[320px]
              object-contain
              mb-[-70px]
            "
          />

          {/* TITLE */}
          <h1
            className="
              text-7xl
              font-bold
              text-white
              leading-none
              mb-4
            "
          >
            Smart Expense
          </h1>

        </div>

        {/* SUBTITLE */}
        <p
          className="
            text-2xl
            text-white/90
            max-w-xl
            leading-relaxed
          "
        >
          Manage your finances smarter,
          easier, and more organized.
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          w-full
          md:w-1/2
          flex
          items-center
          justify-center
          bg-[#f8fafb]
          px-6
          py-10
        "
      >

        {/* CARD */}
        <div
          className="
            w-full
            max-w-md
            bg-white
            rounded-3xl
            p-8
            md:p-10
            shadow-xl
          "
        >

          {/* MOBILE LOGO */}
          <div className="md:hidden flex justify-center mb-8">

            <img
              src={logo}
              alt="logo"
              className="
                h-[140px]
                object-contain
                mb-[-30px]
              "
            />

          </div>

          {/* TITLE */}
          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-gray-900
              leading-tight
              mb-4
            "
          >
            Sign In to
            <br />
            Smart Expense
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              text-gray-500
              mb-8
              text-base
            "
          >
            Welcome back! Please enter your details.
          </p>

          {/* ERROR */}
          {error && (

            <div
              className="
                bg-red-100
                text-red-700
                p-4
                rounded-2xl
                mb-5
              "
            >
              {error}
            </div>

          )}

          {/* FORM */}
          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="
                w-full
                border
                border-gray-300
                rounded-2xl
                p-5
                outline-none
                focus:border-teal-600
                bg-gray-50
              "
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
              className="
                w-full
                border
                border-gray-300
                rounded-2xl
                p-5
                outline-none
                focus:border-teal-600
                bg-gray-50
              "
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-teal-700
                text-white
                py-4
                rounded-2xl
                text-lg
                font-semibold
                hover:bg-teal-800
                duration-300
              "
            >

              {loading
                ? "Loading..."
                : "Sign In"}

            </button>

          </form>

          {/* FOOTER */}
          <p
            className="
              text-center
              mt-8
              text-gray-600
            "
          >
            Don't have an account?{" "}

            <Link
              to="/register"
              className="
                text-teal-700
                font-semibold
                hover:underline
              "
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;