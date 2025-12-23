import { Outlet } from "react-router";
import Header from "../components/portals/Header";
import Footer from "../components/portals/Footer";


const PortalLayout = () => {
  

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortalLayout;
