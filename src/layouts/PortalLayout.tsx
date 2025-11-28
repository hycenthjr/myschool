import { Outlet, Link, useLocation } from "react-router";
import Button from "../components/ui/button";
import { Home } from "lucide-react";
import { assets } from "../assets/assets";

const year = new Date().getFullYear();

const PortalLayout = () => {
  const location = useLocation();

  const getPortalTitle = () => {
    const path = location.pathname;
    if (path.includes("/portal/parent")) return "Parent Portal";
    if (path.includes("/portal/student")) return "Student Portal";
    if (path.includes("/portal/staff")) return "Staff Portal";
    if (path.includes("/portal/admin")) return "Admin Portal";
    if (path.includes("/portal/nurse")) return "Nurse Portal";
    if (path.includes("/portal/coach")) return "Coach Portal";
    if (path.includes("/portal/transport")) return "Transport Portal";
    if (path.includes("/portal/vendor")) return "Vendor Portal";
    return "Portal";
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo & Title */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center">
                  <img src={assets.logo} alt="logo" />
                </div>
              </Link>
              <div className="hidden sm:block border-l pl-4">
                <h1 className="text-gray-900">{getPortalTitle()}</h1>
                <p className="text-xs text-gray-500">Arenas Group of Schools</p>
              </div>
            </div>

            {/* Home Button */}
            <Link to="/">
              <Button
                variant="ghost"
                text="Home"
                icon={<Home className="h-4 w-4" />}
                responsiveText={true}
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-600">
            <div>© {year} Arenas Group of Schools. All rights reserved.</div>
            <div className="flex gap-4">
              <Link
                to="/privacy"
                className="hover:text-gray-900 transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="hover:text-gray-900 transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/contact"
                className="hover:text-gray-900 transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortalLayout;
