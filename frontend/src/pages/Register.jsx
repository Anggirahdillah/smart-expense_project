import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import BASE_URL from "../config";
import logo from "../assets/Logo.png";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {

      setError("Password tidak sama");

      return;
    }

    try {

      setLoading(true);

      await axios.post(
        `${BASE_URL}/api/auth/register`,
        {
          name,
          email,
          password,
        }
      );

      navigate("/");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Register gagal"
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
          Start your journey to financial
          freedom today with Smart Expense.
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          w-full
          md:w-1/2
          flex
          justify-center
          items-center
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
              mb-3
              text-gray-900
              leading-tight
            "
          >
            Create Account
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              text-gray-500
              mb-8
              text-base
            "
          >
            Create your Smart Expense account
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
            onSubmit={handleRegister}
            className="flex flex-col gap-5"
          >

            {/* NAME */}
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
              className="
                border
                border-gray-300
                p-5
                rounded-2xl
                outline-none
                focus:border-teal-700
                bg-gray-50
              "
            />

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
                border
                border-gray-300
                p-5
                rounded-2xl
                outline-none
                focus:border-teal-700
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
                border
                border-gray-300
                p-5
                rounded-2xl
                outline-none
                focus:border-teal-700
                bg-gray-50
              "
            />

            {/* CONFIRM PASSWORD */}
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              required
              className="
                border
                border-gray-300
                p-5
                rounded-2xl
                outline-none
                focus:border-teal-700
                bg-gray-50
              "
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                bg-teal-700
                text-white
                p-5
                rounded-2xl
                text-lg
                font-semibold
                hover:bg-teal-800
                duration-300
              "
            >

              {loading
                ? "Loading..."
                : "Sign Up"}

            </button>

            {/* FOOTER */}
            <p
              className="
                text-center
                text-gray-600
              "
            >
              Already have an account?

              <Link
                to="/"
                className="
                  text-teal-700
                  font-bold
                  ml-2
                  hover:underline
                "
              >
                Sign In
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Register;