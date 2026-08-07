import { motion } from "framer-motion";
import ShortenItem from "./ShortenItem";

const ShortenUrlList = ({ data }) => {
  return (
    <div className="mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            My Short Links
          </h2>
          <p className="text-slate-500 mt-1">
            Manage and monitor all your shortened URLs.
          </p>
        </div>

        <div className="hidden sm:flex items-center justify-center bg-blue-50 text-blue-700 font-semibold px-5 py-2 rounded-full shadow-sm">
          {data.length} {data.length === 1 ? "Link" : "Links"}
        </div>
      </div>

      {/* List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
      >
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.08,
            }}
          >
            <ShortenItem {...item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ShortenUrlList;