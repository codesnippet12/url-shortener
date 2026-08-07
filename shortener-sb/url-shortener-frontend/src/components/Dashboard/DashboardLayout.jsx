import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLink,
  FaMousePointer,
  FaChartLine,
  FaPlus,
} from "react-icons/fa";

import Graph from "./Graph";
import { dummyData } from "../../dummyData/data";
import { useStoreContext } from "../../contextApi/ContextApi";
import {
  useFetchMyShortUrls,
  useFetchTotalClicks,
} from "../../hooks/useQuery";
import ShortenPopUp from "./ShortenPopUp";
import ShortenUrlList from "./ShortenUrlList";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();

  const [shortenPopUp, setShortenPopUp] = useState(false);

  function onError() {
    navigate("/error");
  }

  const {
    isLoading,
    data: myShortenUrls,
    refetch,
  } = useFetchMyShortUrls(token, onError);

  const {
    isLoading: loader,
    data: totalClicks,
  } = useFetchTotalClicks(token, onError);

  const totalLinks = myShortenUrls?.length || 0;

  const totalClickCount =
    totalClicks?.reduce((sum, item) => sum + item.count, 0) || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 lg:px-14 sm:px-8 px-4 py-10">
      {loader ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto">

          {/* Header */}

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">

            <div>
              <h1 className="text-4xl font-bold text-slate-800">
                Dashboard
              </h1>

              <p className="text-slate-500 mt-2">
                Manage, analyze and monitor your shortened URLs.
              </p>
            </div>

            <button
              onClick={() => setShortenPopUp(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <FaPlus />
              Create Short URL
            </button>
          </div>

          {/* Stats */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10">

            <StatCard
              icon={<FaLink />}
              title="Total Links"
              value={totalLinks}
              color="from-blue-500 to-cyan-500"
            />

            <StatCard
              icon={<FaMousePointer />}
              title="Total Clicks"
              value={totalClickCount}
              color="from-purple-500 to-pink-500"
            />

            <StatCard
              icon={<FaChartLine />}
              title="Analytics"
              value={`${totalClicks?.length || 0} Days`}
              color="from-emerald-500 to-green-500"
            />

          </div>

          {/* Graph */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8 mb-10"
          >
            <div className="flex justify-between items-center mb-5">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Click Analytics
                </h2>

                <p className="text-slate-500">
                  Overview of clicks across your links.
                </p>
              </div>
            </div>

            <div className="h-[420px] relative">

              {totalClicks?.length === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <h2 className="text-3xl font-bold text-slate-700">
                    No Analytics Yet
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Create and share a short URL to start tracking clicks.
                  </p>
                </div>
              )}

              <Graph graphData={totalClicks || dummyData} />

            </div>
          </motion.div>

          {/* Links */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-slate-800">
                My Short Links
              </h2>

              <span className="text-slate-500">
                {totalLinks} Links
              </span>

            </div>

            {!isLoading && totalLinks === 0 ? (
              <div className="flex flex-col items-center py-20">

                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <FaLink className="text-blue-600 text-4xl" />
                </div>

                <h2 className="text-2xl font-bold text-slate-700">
                  No Short URLs Yet
                </h2>

                <p className="text-slate-500 mt-2 mb-6">
                  Create your first short URL and start tracking clicks.
                </p>

                <button
                  onClick={() => setShortenPopUp(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl"
                >
                  Create First URL
                </button>

              </div>
            ) : (
              <ShortenUrlList data={myShortenUrls || []} />
            )}

          </motion.div>
        </div>
      )}

      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  );
};

const StatCard = ({ icon, title, value, color }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className={`bg-gradient-to-r ${color} rounded-2xl p-6 text-white shadow-xl`}
  >
    <div className="text-3xl mb-4">
      {icon}
    </div>

    <p className="text-white/80">
      {title}
    </p>

    <h2 className="text-4xl font-bold mt-2">
      {value}
    </h2>
  </motion.div>
);

export default DashboardLayout;