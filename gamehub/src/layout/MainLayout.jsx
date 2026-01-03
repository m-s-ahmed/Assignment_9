import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar></Navbar>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
