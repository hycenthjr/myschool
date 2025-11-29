import React, { useState, forwardRef } from "react";
import { Link, NavLink } from "react-router";
import {
  LogIn,
  Phone,
  Menu,
  X,
  ArrowLeft,
  Users,
  User,
  Briefcase,
  Shield,
  Heart,
  Trophy,
  Bus,
  ShoppingCart,
} from "lucide-react";
import Logo from "./Logo";
import Button from "./ui/button";

const Navbar = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [mobilePortalTab, setMobilePortalTab] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Sports", path: "/sports" },
    { name: "Entrepreneurship", path: "/entrepreneurship" },
    { name: "Boarding Life", path: "/boarding-life" },
    { name: "Admissions", path: "/admissions" },
    { name: "News & Events", path: "/news-events" },
    { name: "Alumni", path: "/alumni" },
  ];

  const portalItems = [
    { icon: Users, label: "Parent Portal", path: "/portal/parent/login" },
    { icon: User, label: "Student Portal", path: "/portal/student/login" },
    { icon: Briefcase, label: "Staff Portal", path: "/portal/staff/login" },
    { icon: Shield, label: "Admin", path: "/portal/admin/login" },
    { icon: Heart, label: "Nurse", path: "/portal/nurse/login" },
    { icon: Trophy, label: "Coach", path: "/portal/coach/login" },
    { icon: Bus, label: "Transport", path: "/portal/transport/login" },
    { icon: ShoppingCart, label: "Vendor", path: "/portal/vendor/login" },
  ];

  const [showNavbar, setShowNavbar] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);



  return (
    // <nav className="sticky top-0 left-0 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50">
    <nav
     ref={ref}
  {...props}
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 
  ${showNavbar ? "translate-y-0" : "-translate-y-full"} 
  bg-white shadow-sm`}
    >
      <div className="flex items-center justify-between px-5 py-3 md:px-8 md:py-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[0.73rem] ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link to="/shop">
              <Button
                text="Shop"
                icon={<ShoppingCart size={16} />}
                iconPosition="left"
                className="cursor-pointer"
                variant="outline"
              />
            </Link>
            <Link
              to="/contact"
              className="flex items-center rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              <Phone size={16} className="mr-1" />
              Contact
            </Link>

            {/* Portal Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPortalOpen(!portalOpen)}
                className="flex items-center gap-1 border border-gray-200 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              >
                <LogIn size={16} />
                Portal Login
              </button>

              {portalOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {portalItems.map(({ icon: Icon, label, path }) => (
                    <Link
                      key={label}
                      to={path}
                      onClick={() => setPortalOpen(false)}
                      className="flex items-center gap-2 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Icon size={16} />
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/admissions">
              <Button text="Apply Now" className="cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Tablet & Mobile */}
        <div className="flex lg:hidden items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Link to="/shop">
              <Button
                text="Shop"
                icon={<ShoppingCart size={16} />}
                iconPosition="left"
                className="cursor-pointer"
                variant="outline"
              />
            </Link>

            <Link
              to="/contact"
              className="flex items-center rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            >
              <Phone size={16} className="mr-1" />
              Contact
            </Link>

            <div className="relative">
              <button
                onClick={() => setPortalOpen(!portalOpen)}
                className="flex items-center gap-1 border border-gray-200 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              >
                <LogIn size={16} />
                Portal Login
              </button>

              {portalOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white py-2 border border-gray-200 rounded-md shadow-lg z-50">
                  {portalItems.map(({ icon: Icon, label, path }) => (
                    <Link
                      key={label}
                      to={path}
                      onClick={() => setPortalOpen(false)}
                      className="flex items-center gap-2 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Icon size={16} />
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Link
            to="/admissions"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md px-4 py-1 text-sm font-semibold hover:opacity-90 transition cursor-pointer"
          >
            Apply
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Drawer Menu */}
      <div
        className={`!fixed top-0 right-0 h-[100dvh] overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out z-50
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
    w-72 md:w-1/2
  `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4">
          <h2 className="font-semibold text-gray-800 text-lg">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="px-4 overflow-y bg-white z-50">
          {/* Normal nav links (hidden when portal tab is open) */}
          {!mobilePortalTab && (
            <>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-sm px-2 py-1 rounded ${
                        isActive
                          ? "text-blue-600 font-medium"
                          : "text-gray-700 hover:text-blue-600"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Contact and Portal buttons */}
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  to="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 border border-blue-500 rounded-md py-2 text-sm text-blue-500 hover:bg-gray-100 transition cursor-pointer"
                >
                  <ShoppingCart size={16} /> Shop
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 border rounded-md py-2 text-sm text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                >
                  <Phone size={16} />
                  Contact
                </Link>

                <button
                  onClick={() => setMobilePortalTab(true)}
                  className="flex items-center justify-center gap-2 border rounded-md py-2 text-sm text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                >
                  <LogIn size={16} />
                  Portal Login
                </button>
              </div>
            </>
          )}

          {/* Portal Tab */}
          {mobilePortalTab && (
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => setMobilePortalTab(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 mb-4"
              >
                <ArrowLeft size={18} /> Back
              </button>

              {portalItems.map(({ icon: Icon, label, path }) => (
                <Link
                  key={label}
                  to={path}
                  onClick={() => {
                    setMobilePortalTab(false);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
                >
                  <Icon size={16} />
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Background overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed h-screen inset-0 bg-black/30 z-40"
        ></div>
      )}
    </nav>
  );
});

export default Navbar;
