import "./Layout.css";
import { Outlet, ScrollRestoration } from "react-router";
// import Footer from "../components/Footer";

const ShopLayout = () => {
  return (
    <div className="layout">
      {/* <Navbar /> */}
      <main className="w-full">
        <ScrollRestoration />
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ShopLayout;
