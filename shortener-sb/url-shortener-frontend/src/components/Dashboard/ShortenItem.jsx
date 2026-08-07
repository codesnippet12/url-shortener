import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  FaExternalLinkAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { LiaCheckSolid } from "react-icons/lia";
import {
  MdAnalytics,
  MdOutlineAdsClick,
} from "react-icons/md";

import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../../contextApi/ContextApi";
import { Hourglass } from "react-loader-spinner";
import Graph from "./Graph";

const ShortenItem = ({
  originalUrl,
  shortUrl,
  clickCount,
  createdDate,
}) => {
  const { token } = useStoreContext();
  const navigate = useNavigate();

  const [isCopied, setIsCopied] = useState(false);
  const [analyticToggle, setAnalyticToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [analyticsData, setAnalyticsData] = useState([]);

  const subDomain =
    import.meta.env.VITE_REACT_FRONT_END_URL.replace(
      /^https?:\/\//,
      ""
    );

  // ===============================
  // Analytics button
  // ===============================
  const analyticsHandler = (shortUrl) => {
    if (!analyticToggle) {
      setSelectedUrl(shortUrl);
    }

    setAnalyticToggle(!analyticToggle);
  };

  // ===============================
  // Fetch analytics
  // ===============================
  const fetchMyShortUrl = async () => {
    setLoader(true);

    try {
      // Get today's date
      const today = dayjs();

      // Start date = 7 days ago
      const startDate = today
        .subtract(7, "day")
        .startOf("day")
        .format("YYYY-MM-DDTHH:mm:ss");

      // End date = today end
      const endDate = today
        .endOf("day")
        .format("YYYY-MM-DDTHH:mm:ss");

      const { data } = await api.get(
        `/api/urls/analytics/${selectedUrl}?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log("Analytics data:", data);

      setAnalyticsData(data);
      setSelectedUrl("");

    } catch (error) {
      console.log("Analytics error:", error);
      navigate("/error");
    } finally {
      setLoader(false);
    }
  };

  // ===============================
  // Fetch when selectedUrl changes
  // ===============================
  useEffect(() => {
    if (selectedUrl) {
      fetchMyShortUrl();
    }
  }, [selectedUrl]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mb-6 overflow-hidden">

      {/* Top Section */}
      <div className="flex sm:flex-row flex-col justify-between gap-6 p-6">

        {/* Left Section */}
        <div className="flex-1 min-w-0">

          <div className="flex items-center gap-2">

            <a
              href={`${import.meta.env.VITE_REACT_FRONT_END_URL}/s/${shortUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:text-purple-600 transition break-all"
            >
              {subDomain + "/s/" + shortUrl}
            </a>

            <FaExternalLinkAlt className="text-blue-500 text-sm" />

          </div>

          <p className="text-gray-500 mt-2 text-sm break-all">
            {originalUrl}
          </p>

          <div className="flex flex-wrap gap-3 mt-5">

            {/* Click Count */}
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

              <MdOutlineAdsClick className="text-lg" />

              {clickCount}{" "}
              {clickCount === 1 ? "Click" : "Clicks"}

            </div>

            {/* Created Date */}
            <div className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">

              <FaRegCalendarAlt />

              {dayjs(createdDate).format(
                "MMM DD, YYYY"
              )}

            </div>

          </div>

        </div>

        {/* Right Buttons */}
        <div className="flex sm:flex-col flex-wrap gap-3 justify-center items-stretch">

          {/* Copy Button */}
          <CopyToClipboard
            text={`${import.meta.env.VITE_REACT_FRONT_END_URL}/s/${shortUrl}`}
            onCopy={() => {
              setIsCopied(true);

              setTimeout(
                () => setIsCopied(false),
                2000
              );
            }}
          >

            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl shadow-md transition">

              {isCopied ? (
                <>
                  <LiaCheckSolid />
                  Copied
                </>
              ) : (
                <>
                  <IoCopy />
                  Copy
                </>
              )}

            </button>

          </CopyToClipboard>

          {/* Analytics Button */}
          <button
            onClick={() =>
              analyticsHandler(shortUrl)
            }
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 py-2.5 rounded-xl shadow-md transition"
          >

            <MdAnalytics />

            {analyticToggle
              ? "Hide Analytics"
              : "View Analytics"}

          </button>

        </div>

      </div>

      {/* Analytics Panel */}
      {analyticToggle && (

        <div className="border-t border-slate-200 bg-slate-50 p-6">

          {loader ? (

            <div className="flex flex-col items-center justify-center h-80">

              <Hourglass
                visible={true}
                height="55"
                width="55"
                ariaLabel="loading"
                colors={["#2563eb", "#8b5cf6"]}
              />

              <p className="text-slate-500 mt-3 font-medium">
                Loading Analytics...
              </p>

            </div>

          ) : analyticsData.length === 0 ? (

            <div className="flex flex-col items-center justify-center h-96">

              <MdAnalytics className="text-6xl text-slate-300 mb-4" />

              <h2 className="text-2xl font-bold text-slate-700">
                No Analytics Yet
              </h2>

              <p className="text-slate-500 mt-2 text-center">
                Share this link to start tracking your clicks.
              </p>

            </div>

          ) : (

            <div className="h-96">

              <Graph
                graphData={analyticsData}
              />

            </div>

          )}

        </div>

      )}

    </div>
  );
};

export default ShortenItem;