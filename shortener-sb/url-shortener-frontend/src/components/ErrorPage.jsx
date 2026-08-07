import { motion } from "framer-motion";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-white to-red-50 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl border border-red-100 p-10 max-w-xl w-full text-center"
      >
        {/* Error Icon */}

        <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mx-auto">
          <FaExclamationTriangle className="text-red-500 text-5xl" />
        </div>

        {/* Title */}

        <h1 className="mt-8 text-4xl font-extrabold text-slate-800">
          Oops!
        </h1>

        <h2 className="mt-2 text-xl font-semibold text-slate-700">
          Something went wrong
        </h2>

        {/* Message */}

        <p className="mt-5 text-slate-500 leading-7">
          {message
            ? message
            : "An unexpected error occurred while processing your request. Please try again in a few moments."}
        </p>

        {/* Buttons */}

        <div className="flex sm:flex-row flex-col gap-4 mt-10 justify-center">

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            <FaHome />
            Back Home
          </button>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            <FaRedo />
            Try Again
          </button>

        </div>

        {/* Footer */}

        <p className="mt-8 text-sm text-slate-400">
          If the issue persists, please contact support.
        </p>
      </motion.div>

    </div>
  );
};

export default ErrorPage;