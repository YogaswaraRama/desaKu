import React from "react";
import { Hero } from "../components/Hero";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const About = (props) => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <Navbar />
      <Hero />
      <div className="px-24 pt-36">
        <h1 className="text-4xl pb-5 font-bold">
          Tentang <span className="text-[#29b2ff]">Kami</span>
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi, ex aut assumenda doloribus minus non amet! Fugiat enim praesentium necessitatibus dicta sint earum possimus dolore accusamus, placeat blanditiis ducimus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi, ex aut assumenda doloribus minus non amet! Fugiat enim praesentium necessitatibus dicta sint earum possimus dolore accusamus, placeat blanditiis
        ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi, ex aut assumenda doloribus minus non amet! Fugiat enim praesentium necessitatibus dicta sint earum possimus dolore accusamus, placeat blanditiis
        ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi, ex aut assumenda doloribus minus non amet! Fugiat enim praesentium necessitatibus dicta sint earum possimus dolore accusamus, placeat
        blanditiisLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi, ex aut assumenda doloribus minus non amet! Fugiat enim praesentium necessitatibus dicta sint earum possimus dolore accusamus, placeat
        blanditiis ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi, ex aut assumenda doloribus minus non amet! Fugiat enim praesentium necessitatibus dicta sint earum possimus dolore accusamus, placeat
        blanditiis ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi, ex aut assumenda doloribus minus non amet! Fugiat enim praesentium necessitatibus dicta sint earum possimus dolore accusamus, placeat
        blanditiis ducimus! ducimus!
      </div>
      <Footer />
    </>
  );
};
