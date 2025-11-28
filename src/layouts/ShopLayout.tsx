import "./Layout.css";
import { Outlet } from "react-router";
// import Footer from "../components/Footer";

const ShopLayout = () => {
  return (
    <div className="layout">
      {/* <Navbar /> */}
      <main className="w-full">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ShopLayout;
