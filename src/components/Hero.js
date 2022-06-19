import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const heroText = ["adaada", "wqwrqrqq"];
if (document.title === "Home") {
  <h1>heroText[0]</h1>;
} else {
  <h1>heroText[1]</h1>;
}

export const Hero = () => {
  return (
    <>
      <div className="bg-heropic h-screen bg-cover flex justify-center items-center flex-col">
        <h1>{heroText}</h1>
        <img src="/logohero.png" className="w-1/3 pb-10" alt="" />
        <Link to="/login">
          <Button />
        </Link>
      </div>
    </>
  );
};
