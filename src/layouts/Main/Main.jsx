import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../../components/ui/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Main;
