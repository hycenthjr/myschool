import { useState } from "react";
import "./Layout.css";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../components/admin/Navbar";
import Footer from "../components/admin/Footer";
import SideBar from "../components/admin/SideBar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handler to toggle sidebar
  const handleSidebarToggle = () => setSidebarOpen((v) => !v);
  // Handler to close sidebar (for overlay click)
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <div className="layout">
      <ScrollRestoration />
      <Navbar onMenuClick={handleSidebarToggle} />

      <main className="w-[100%] flex">
        {/* Sidebar: hidden on small screens, toggled with menu */}
        <div>
          <div
            className={`hidden fixed top-0 left-0 h-full lg:block`}
            style={{ width: "17rem" }}
          >
            <SideBar />
          </div>
          {/* Mobile & md sidebar */}
          <div
            className={`fixed top-0 left-0 z-50 h-full  bg-white transition-transform duration-300 lg:hidden ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ width: "17rem" }}
          >
            <SideBar />
          </div>
          {/* Overlay for mobile & md sidebar */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/60 bg-opacity-30 lg:hidden"
              onClick={handleSidebarClose}
            />
          )}
        </div>

        {/* Main content */}
        <div className="w-[100%]">
          <div className="mt-[64px] md:ml-[17rem] min-h-[calc(100vh-64px-48px)] bg-gray-50 px-[2%] py-[5%] md:py-[3%]">
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
      <div></div>
    </div>
  );
};

export default Layout;
