import { motion } from "framer-motion";
import {
  FaLink,
  FaChartLine,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

const icons = {
  "Simple URL Shortening": (
    <FaLink className="text-3xl text-blue-600" />
  ),
  "Powerful Analytics": (
    <FaChartLine className="text-3xl text-green-600" />
  ),
  "Enhanced Security": (
    <FaShieldAlt className="text-3xl text-purple-600" />
  ),
  "Fast and Reliable": (
    <FaBolt className="text-3xl text-orange-500" />
  ),
};

const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
      group
      bg-white
      rounded-3xl
      p-8
      border
      border-slate-200
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
      "
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
        {icons[title]}
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        {title}
      </h2>

      <p className="text-slate-600 leading-7">
        {desc}
      </p>

      <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition">
        Learn More →
      </div>
    </motion.div>
  );
};

export default Card;