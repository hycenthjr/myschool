import { Link, useNavigate } from "react-router";
import Button from "../../ui/button";
import { assets } from "../../assets/assets";
import { LogOut, Menu, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import Notification from "./Notification";

const Navbar = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  // Handle logout
  const handleLogoutClick = () => {
    navigate("/admin/login");
  };

  // Handle toggle for menu
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        // !event.target.closest(".notification-container") &&
        !event.target.closest(".user-Image-container") &&
        !event.target.closest(".menu_list")
      ) {
        // setOpenIndex(null);
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openMenu]);

  return (
    <header className="fixed top-0 z-50 max-w-[1920px] w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            {/* Mobile & md menu button */}
            <button
              className="lg:hidden rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              onClick={onMenuClick}
              aria-label="Open sidebar menu"
            >
              <Menu />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center">
                <img src={assets.logo} alt="logo" />
              </div>
            </Link>
            <div className="hidden sm:block border-l border-gray-200 pl-4">
              <h1 className="text-gray-900">Admin Portal</h1>
              <p className="text-xs text-gray-500">Arenas Group of Schools</p>
            </div>
          </div>

          {/* Home Button */}
          <div className="flex items-center gap-4">
            <Notification />

            <Link to="/">
              <Button variant="outline" text="Back to Website"  className="text-[0.5rem] md:text-[0.8rem]"/>
            </Link>

            <div onClick={toggleMenu} className="user-Image-container">
              <div>
                <img src={assets.avater} alt="avatar" />
              </div>
              <div className={`profile ${openMenu ? "open" : ""}`}>
                <div className="menu_list">
                  <li>
                    <UserCog className="h-4 w-4" />
                    <Link to="/admin/profile-settings">Account</Link>
                  </li>
                  <li onClick={handleLogoutClick}>
                    <LogOut className="h-4 w-4" />
                    <p>Logout</p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
