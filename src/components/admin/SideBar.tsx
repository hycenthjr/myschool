import {
  GraduationCap,
  DollarSign,
  BarChart3,
  Settings,
  Home,
  UserCog,
  BookOpen,
  BookUser,
  ChevronDown,
  Settings2,
  ShoppingBasketIcon,
  LayoutDashboard,
} from "lucide-react";
import { NavLink, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import Logo from "../../constants/Logo";

const SideBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState<Record<string, boolean>>({
    management: false,
    students: false,
    settings: false,
  });

  useEffect(() => {
    // expand a section if current route matches any child
    setOpen((o) => ({
      ...o,
      management:
        location.pathname.startsWith("/admin/staff") ||
        location.pathname.startsWith("/admin/student") ||
        location.pathname.startsWith("/admin/manage-classes") ||
        location.pathname.startsWith("/admin/academic-report"),
      students:
        location.pathname.startsWith("/admin/student") ||
        location.pathname.startsWith("/admin/manage-classes") ||
        location.pathname.startsWith("/admin/academic-report"),
      settings: location.pathname.startsWith("/admin/settings"),
    }));
  }, [location.pathname]);

  const toggle = (key: string) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  const linkClass = (isActive: boolean) =>
    `flex items-center gap-2 px-2 py-1 rounded-md ${
      isActive
        ? "text-sky-600 bg-sky-50 font-medium"
        : "text-gray-700 hover:text-sky-600 hover:bg-gray-50"
    }`;

  return (
    <div className="mt-0 md:mt-[64px] h-full w-[17rem] px-4 pt-[3%] md:pt-[20%] border-r border-gray-200 min-h-[calc(100vh-64px)] bg-white ">
      <div className="pb-8 pt-1 md:hidden">
        <Logo />
      </div>

      <ul className="flex flex-col space-y-1">
        {/* Dashboard Section */}
        <li>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => linkClass(isActive)}
          >
            <button className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <Home className="h-4 w-4" />
              <span className="font-medium">Dashboard</span>
            </button>
          </NavLink>
        </li>

        {/* Management Section */}
        <li>
          <div
            className={`flex items-center justify-between px-2 py-1 rounded-md cursor-pointer ${
              open.management ? "bg-sky-50" : "hover:bg-gray-50"
            }`}
            onClick={() => toggle("management")}
          >
            <button className="flex items-center gap-2 text-gray-700 pointer-events-none">
              <LayoutDashboard className="h-4 w-4" />
              <span className="font-medium">Management</span>
            </button>
            <button
              // onClick={() => toggle("students")}
              // aria-label="toggle students"
              className={`p-1 text-gray-500 transition-transform cursor-pointer ${
                open.management ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <ul
            className={`pl-6 mt-1 overflow-hidden transition-all duration-200 ${
              open.management ? "max-h-40" : "max-h-0"
            }`}
          >
            {/* Staffs Section */}
            <li>
              <NavLink
                to="/admin/staffs"
                className={({ isActive }) => linkClass(isActive)}
              >
                <button className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <UserCog className="h-4 w-4" />
                  <span className="font-medium">Staffs</span>
                </button>
              </NavLink>
            </li>

            {/* Students Section */}
            <li>
              <div
                className={`flex items-center justify-between px-2 py-1 rounded-md cursor-pointer ${
                  open.students ? "bg-sky-50" : "hover:bg-gray-50"
                }`}
                onClick={() => toggle("students")}
              >
                <button className="flex items-center gap-2 text-gray-700 pointer-events-none">
                  <GraduationCap className="h-4 w-4" />
                  <span className="font-medium">Students</span>
                </button>
                <button
                  // onClick={() => toggle("students")}
                  // aria-label="toggle students"
                  className={`p-1 text-gray-500 transition-transform cursor-pointer ${
                    open.students ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <ul
                className={`pl-6 mt-1 overflow-hidden transition-all duration-200 ${
                  open.students ? "max-h-40" : "max-h-0"
                }`}
              >
                <li>
                  <NavLink
                    to="/admin/students"
                    className={({ isActive }) => linkClass(isActive)}
                  >
                    <button className="flex items-center gap-2 text-gray-700 cursor-pointer">
                      <BookUser className="h-4 w-4" />
                      <span className="font-medium">View All Students</span>
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/manage-classes"
                    className={({ isActive }) => linkClass(isActive)}
                  >
                    <button className="flex items-center gap-2 text-gray-700 cursor-pointer">
                      <BookOpen className="h-4 w-4" />
                      <span className="font-medium">Manage Classes</span>
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/academic-report"
                    className={({ isActive }) => linkClass(isActive)}
                  >
                    <button className="flex items-center gap-2 text-gray-700 cursor-pointer">
                      <TbReportAnalytics className="h-4 w-4" />
                      <span className="font-medium">Academic Report</span>
                    </button>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Finance Section */}
        <li>
          <NavLink
            to="/admin/finance"
            className={({ isActive }) => linkClass(isActive)}
          >
            <button className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <DollarSign className="h-4 w-4" />
              <span className="font-medium">Finance</span>
            </button>
          </NavLink>
        </li>

        {/* Analytics Section */}
        <li>
          <NavLink
            to="/admin/analytics"
            className={({ isActive }) => linkClass(isActive)}
          >
            <button className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <BarChart3 className="h-4 w-4" />
              <span className="font-medium">Analytics</span>
            </button>
          </NavLink>
        </li>

        {/* Settings Section */}
        <li>
          <div
            className={`flex items-center justify-between px-2 py-1 rounded-md cursor-pointer ${
              open.settings ? "bg-sky-50" : "hover:bg-gray-50"
            }`}
            onClick={() => toggle("settings")}
          >
            <button className="flex items-center gap-2 text-gray-700 pointer-events-none">
              <Settings className="h-4 w-4" />
              <span className="font-medium">Settings</span>
            </button>
            <button
              // onClick={() => toggle("settings")}
              // aria-label="toggle settings"
              className={`p-1 text-gray-500 transition-transform cursor-pointer ${
                open.settings ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <ul
            className={`pl-6 mt-1 overflow-hidden transition-all duration-200 ${
              open.settings ? "max-h-40" : "max-h-0"
            }`}
          >
            <li>
              <NavLink
                to="/admin/settings/general"
                className={({ isActive }) => linkClass(isActive)}
              >
                <button className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <Settings2 className="h-4 w-4" />
                  <span className="font-medium">General settings</span>
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/settings/frontend"
                className={({ isActive }) => linkClass(isActive)}
              >
                <button className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <FaHome className="h-4 w-4" />
                  <span className="font-medium">Frontend settings</span>
                </button>
              </NavLink>
            </li>
            <li className="mt-1">
              <NavLink
                to="/admin/settings/shop"
                className={({ isActive }) => linkClass(isActive)}
              >
                <button className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <ShoppingBasketIcon className="h-4 w-4" />
                  <span className="font-medium">Shop settings</span>
                </button>
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
