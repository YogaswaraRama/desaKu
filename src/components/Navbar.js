import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#FDFDFD] p-4">
      <Link to="/" className="pl-12">
        <img src="logo.png" alt="" className="w-6" />
      </Link>
      <div className="pr-12">
        <Link to="/about" className="p-4 ">
          Tentang Kami
        </Link>
        <Link to="/warga" className="p-4">
          Data Warga
        </Link>
        <Link to="/login">
          <Button />
        </Link>
      </div>
    </nav>
  );
};
