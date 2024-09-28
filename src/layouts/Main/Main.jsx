import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Main;
