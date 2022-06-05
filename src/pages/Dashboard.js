import React from "react";
import { Navbar } from "../components/Navbar";
import { Helmet } from "react-helmet";

export const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Navbar />
      <div className="grid grid-rows-10 grid-flow-col">
        <div className="row border-r-2 border-[#9F9F9F] h-screen">
          <div className="grid grid-rows-3">
            <div className="">
              <a href="">Menu</a>
            </div>
            <div className="">
              <a href="">Dashboard</a>
            </div>
            <div className="">
              <a href="">Data Warga</a>
            </div>
            <div className="">
              <a href="">Uang Kas</a>
            </div>
          </div>
        </div>
        <div className="row-span-2 col-span-5">Tes</div>
      </div>
    </>
  );
};
