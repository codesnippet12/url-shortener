import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaLink,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <FaLink className="text-white text-lg" />
              </div>

              <h2 className="text-3xl font-black text-white">
                Linklytics
              </h2>

            </div>

            <p className="mt-6 text-slate-400 leading-7">
              Simplify URL shortening, monitor analytics,
              and manage all your links from one modern dashboard.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Navigation
            </h3>

            <div className="space-y-3">

              <Link
                to="/"
                className="block hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block hover:text-white transition"
              >
                About
              </Link>

              <Link
                to="/dashboard"
                className="block hover:text-white transition"
              >
                Dashboard
              </Link>

            </div>

          </div>

          {/* Features */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Features
            </h3>

            <div className="space-y-3">

              <p>🔗 URL Shortening</p>

              <p>📈 Analytics</p>

              <p>🔒 Secure Authentication</p>

              <p>⚡ Lightning Fast Redirects</p>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 transition flex justify-center items-center"
              >
                <FaFacebook />
              </a>

              <a
                href="https://github.com/codesnippet12"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-gray-700 transition flex justify-center items-center"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-pink-600 transition flex justify-center items-center"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/subhranil-das-software-engineer/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-500 transition flex justify-center items-center"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 mt-14 pt-8 flex md:flex-row flex-col items-center justify-between gap-4">

          <p className="text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Linklytics. All rights reserved.
          </p>

          <p className="text-slate-500">
            Built with ❤️ using React, Spring Boot & MySQL
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;