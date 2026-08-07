import {
  FaLink,
  FaShareAlt,
  FaEdit,
  FaChartLine,
  FaArrowRight,
  FaUsers,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <FaLink />,
    title: "Simple URL Shortening",
    desc: "Create clean and memorable URLs instantly with just one click.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: <FaShareAlt />,
    title: "Powerful Analytics",
    desc: "Track clicks, visitors, locations and monitor your link performance.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: <FaEdit />,
    title: "Enhanced Security",
    desc: "Your links are protected with secure authentication and encryption.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: <FaChartLine />,
    title: "Fast & Reliable",
    desc: "Lightning-fast redirects backed by a highly available infrastructure.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
];

const stats = [
  {
    icon: <FaLink />,
    value: "10K+",
    title: "Short URLs",
  },
  {
    icon: <FaUsers />,
    value: "5K+",
    title: "Users",
  },
  {
    icon: <FaGlobe />,
    value: "1M+",
    title: "Clicks",
  },
  {
    icon: <FaRocket />,
    value: "99.9%",
    title: "Uptime",
  },
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold"
          >
            About Linklytics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="mt-6 text-lg leading-8 max-w-3xl text-blue-100"
          >
            Linklytics helps individuals, startups and businesses create
            powerful short URLs, monitor clicks in real time and understand
            audience engagement through interactive analytics.
          </motion.p>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-10 flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Get Started
            <FaArrowRight />
          </button>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center text-slate-800">
          Why Choose Linklytics?
        </h2>

        <p className="text-center text-slate-500 mt-4 max-w-2xl mx-auto">
          Everything you need to shorten, manage and analyze your links from
          one beautiful dashboard.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {features.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-8 border"
            >

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${item.bg} ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6 text-slate-800">
                {item.title}
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Stats */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-slate-50 rounded-3xl p-8 shadow-md"
            >

              <div className="text-blue-600 text-4xl flex justify-center mb-4">
                {item.icon}
              </div>

              <h1 className="text-4xl font-bold text-slate-800">
                {item.value}
              </h1>

              <p className="text-slate-500 mt-2">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-16 px-8 shadow-2xl">

            <h2 className="text-4xl font-bold">
              Ready to shorten your first URL?
            </h2>

            <p className="mt-5 text-blue-100 text-lg">
              Join thousands of users already using Linklytics to manage
              their links smarter.
            </p>

            <button
              onClick={() => navigate("/dashboard")}
              className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Start Now
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutPage;