import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">Gemstore</h2>
            <p className="mt-2 text-gray-400">
              We provide the best digital solutions to grow your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/terms-and-conditions" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-white">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a
                href="https://www.facebook.com/gemstoreapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://twitter.com/gemstoreapp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/gemstoreapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/gemstoreapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition"
              >
                <FaLinkedin className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Gemstore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
