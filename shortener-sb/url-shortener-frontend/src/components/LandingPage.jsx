import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLink,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const dashBoardNavigateHandler = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* HERO */}

      <section className="min-h-[92vh] flex items-center">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold"
            >
              🚀 Smart URL Management Platform
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
              className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-slate-900"
            >
              Shorten URLs.
              <br />

              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Track Every Click.
              </span>

              <br />

              Grow Faster.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .2 }}
              className="mt-8 text-lg text-slate-600 leading-8"
            >
              Linklytics helps you create powerful short URLs,
              monitor analytics in real time,
              and understand audience engagement through
              an intuitive dashboard.
            </motion.p>

            <div className="flex flex-wrap gap-5 mt-10">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: .95 }}
                onClick={dashBoardNavigateHandler}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-xl"
              >
                Get Started
                <FaArrowRight />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: .95 }}
                onClick={dashBoardNavigateHandler}
                className="px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
              >
                Dashboard
              </motion.button>

            </div>

            {/* TRUST BADGES */}

            <div className="flex flex-wrap gap-6 mt-12">

              <div className="flex items-center gap-2 text-slate-700">
                <FaShieldAlt className="text-green-500" />
                Secure
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <FaChartLine className="text-blue-500" />
                Analytics
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <FaUsers className="text-purple-500" />
                Trusted
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative flex justify-center"
          >

            <div className="absolute w-80 h-80 rounded-full bg-blue-200 blur-3xl opacity-40"></div>

            <img
              src="/images/img2.png"
              alt="Linklytics"
              className="relative w-full max-w-xl drop-shadow-2xl"
            />

          </motion.div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <FaLink className="mx-auto text-4xl text-blue-600 mb-4"/>
            <h2 className="text-4xl font-bold">50K+</h2>
            <p className="text-slate-500 mt-2">Short URLs</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <FaChartLine className="mx-auto text-4xl text-green-600 mb-4"/>
            <h2 className="text-4xl font-bold">1M+</h2>
            <p className="text-slate-500 mt-2">Total Clicks</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <FaUsers className="mx-auto text-4xl text-purple-600 mb-4"/>
            <h2 className="text-4xl font-bold">5K+</h2>
            <p className="text-slate-500 mt-2">Users</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <FaShieldAlt className="mx-auto text-4xl text-red-500 mb-4"/>
            <h2 className="text-4xl font-bold">99.9%</h2>
            <p className="text-slate-500 mt-2">Uptime</p>
          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-5xl font-bold text-center text-slate-900"
        >
          Everything you need.
        </motion.h2>

        <p className="text-center text-slate-500 mt-4 max-w-2xl mx-auto">
          Powerful features designed to make URL management effortless.
        </p>

        <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-8 mt-16">

          <Card
            title="Simple URL Shortening"
            desc="Generate clean, memorable URLs in seconds with one click."
          />

          <Card
            title="Powerful Analytics"
            desc="Track clicks, locations and engagement using interactive analytics."
          />

          <Card
            title="Enhanced Security"
            desc="Your links stay secure with authentication and protected access."
          />

          <Card
            title="Fast and Reliable"
            desc="Lightning-fast redirects with reliable cloud infrastructure."
          />

        </div>

      </section>

            {/* HOW IT WORKS */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center text-slate-900"
          >
            How It Works
          </motion.h2>

          <p className="text-center text-slate-500 mt-4 max-w-2xl mx-auto">
            Create and manage your short links in just a few simple steps.
          </p>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

            {[
              {
                step: "01",
                title: "Paste URL",
                desc: "Paste your long URL into Linklytics."
              },
              {
                step: "02",
                title: "Generate Link",
                desc: "Create a secure short URL instantly."
              },
              {
                step: "03",
                title: "Share",
                desc: "Share your link anywhere on the web."
              },
              {
                step: "04",
                title: "Track Analytics",
                desc: "Monitor clicks and engagement in real time."
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ y: -10 }}
                className="bg-slate-50 rounded-3xl p-8 shadow-md text-center hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-3">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-12 py-20 text-center shadow-2xl"
        >

          <h2 className="text-5xl font-black">
            Ready to shorten your first URL?
          </h2>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of users using Linklytics to shorten,
            manage and analyze their links effortlessly.
          </p>

          <button
            onClick={dashBoardNavigateHandler}
            className="mt-10 bg-white text-blue-700 font-bold px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition"
          >
            Start For Free
          </button>

        </motion.div>

      </section>

    </div>
  );
};

export default LandingPage;