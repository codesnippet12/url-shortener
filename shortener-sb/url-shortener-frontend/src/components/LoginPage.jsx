import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import TextField from "./TextField";
import api from "../api/api";
import toast from "react-hot-toast";
import { useStoreContext } from "../contextApi/ContextApi";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
    setLoader(true);

    try {
      const { data: response } = await api.post(
        "/api/auth/public/login",
        data
      );

      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));

      toast.success("Login Successful!");

      reset();

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 via-white to-purple-100 flex justify-center items-center px-5 py-10">

      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8">

        {/* Login Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex justify-center items-center shadow-lg">
            <FaLock className="text-white text-3xl" />
          </div>
        </div>

        {/* Heading */}

        <h1 className="text-4xl font-bold text-center text-slate-800">
          Welcome Back
        </h1>

        <p className="text-center text-slate-500 mt-2 mb-8">
          Sign in to continue managing your shortened URLs.
        </p>

        <form
          onSubmit={handleSubmit(loginHandler)}
          className="space-y-5"
        >

          <TextField
            label="Username"
            required
            id="username"
            type="text"
            message="*Username is required"
            placeholder="Enter your username"
            register={register}
            errors={errors}
          />

          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="Enter your password"
            register={register}
            min={6}
            errors={errors}
          />

          <button
            disabled={loader}
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
          >
            {loader ? "Signing In..." : "Login"}
          </button>

        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>

          <span className="px-3 text-gray-500 text-sm">
            OR
          </span>

          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <p className="text-center text-gray-600">
          Don't have an account?

          <Link
            to="/register"
            className="ml-2 font-semibold text-blue-600 hover:text-purple-600 transition"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
};

export default LoginPage;