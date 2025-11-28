import { Link } from "react-router";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "./Logo";
import Button from "./ui/button";


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14">
          {/* About Section */}
          <div>
            <Logo textColor="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent" />
            <p className="text-sm my-4">
              Where Champions & Entrepreneurs Are Made. A world-class boarding
              school combining academics, elite sports, and real-world
              entrepreneurship.
            </p>
            <div className="flex gap-2">
              <Link
                to=""
                className="flex justify-center items-center rounded-md h-9 w-9 p-0 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                to=""
                className="flex justify-center items-center rounded-md h-9 w-9 p-0 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                to=""
                className="flex justify-center items-center rounded-md h-9 w-9 p-0 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                to=""
                className="flex justify-center items-center rounded-md h-9 w-9 p-0 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="hover:text-white transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  className="hover:text-white transition-colors"
                >
                  Sports & Performance
                </Link>
              </li>
              <li>
                <Link
                  to="/entrepreneurship"
                  className="hover:text-white transition-colors"
                >
                  Entrepreneurship
                </Link>
              </li>
              <li>
                <Link
                  to="/boarding"
                  className="hover:text-white transition-colors"
                >
                  Boarding Life
                </Link>
              </li>
              <li>
                <Link
                  to="/virtual-tour"
                  className="hover:text-white transition-colors"
                >
                  Virtual Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-white mb-4">Admissions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/admissions"
                  className="hover:text-white transition-colors"
                >
                  Apply Online
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions#requirements"
                  className="hover:text-white transition-colors"
                >
                  Requirements
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions#fees"
                  className="hover:text-white transition-colors"
                >
                  Fees & Scholarships
                </Link>
              </li>
              <li>
                <Link
                  to="/news-events"
                  className="hover:text-white transition-colors"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/alumni"
                  className="hover:text-white transition-colors"
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="hover:text-white transition-colors"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm mb-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Covenant Estate Garden, Dutse Apo, Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+234 800 ARENAS 1</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>admissions@arenas.edu.ng</span>
              </li>
            </ul>
            <div>
              <p className="text-sm mb-2">Subscribe to our newsletter</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                />
                <Button text="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>© {year} Arenas Group of Schools. All rights reserved.</div>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link
                to="/safeguarding"
                className="hover:text-white transition-colors"
              >
                Safeguarding Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;