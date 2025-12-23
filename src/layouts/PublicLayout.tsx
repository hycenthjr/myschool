import "./Layout.css";
import { useRef, useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const Layout = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      // Convert px → rem (16px = 1rem)
      setNavHeight(navRef.current.offsetHeight / 16);
    }
  }, []);

  return (
    <div className="layout">
      <ScrollRestoration />
      <Navbar ref={navRef} />
      <main className="w-full" style={{ marginTop: `${navHeight}rem` }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
