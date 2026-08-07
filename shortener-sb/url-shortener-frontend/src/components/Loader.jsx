import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[450px] w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl shadow-xl border border-slate-200 px-10 py-8 flex flex-col items-center"
      >
        <RotatingLines
          visible={true}
          height="70"
          width="70"
          color="#2563EB"
          strokeWidth="5"
          animationDuration="0.8"
        />

        <h2 className="mt-6 text-xl font-bold text-slate-800">
          Loading...
        </h2>

        <p className="mt-2 text-slate-500 text-center">
          Please wait while we fetch your data.
        </p>

        <div className="w-48 h-2 rounded-full bg-slate-200 mt-6 overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.3,
              ease: "linear",
            }}
            className="w-20 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;