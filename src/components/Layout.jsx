import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      {/* NavBar */}
      <input type="checkbox" name="" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        {/* <!-- NavBar Section --> */}
        <Navbar />
        <div className="main" style={{ minHeight: "50vh" }}>
          <Outlet />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
