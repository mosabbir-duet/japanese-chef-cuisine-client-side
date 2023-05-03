import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/SharedPages/Footer/Footer";
import Header from "../pages/SharedPages/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
