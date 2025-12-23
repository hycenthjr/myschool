import "../Layout.css";
import { Outlet } from "react-router";

const PortalAuthLayout = () => {
  return (
    <div className="layout">
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default PortalAuthLayout;
