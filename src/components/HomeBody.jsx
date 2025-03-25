import React from "react";
import Header from "./Header";
import FlexNav from "./FlexNav";
import { motion } from "framer-motion";

const HomeBody = () => {
  const leftSlideVariant = {
    initial: { x: "-100%", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
    },
  };
  const rightSlideVariant = {
    initial: { x: "100%", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
    },
  };
  return (
    <>
      <Header fore="Akanbi" back="Olorunfemi" />
      <section className="intro__design">
        <motion.div className="developer__profile__photo" variants={leftSlideVariant} initial="initial" animate="animate" exit="exit" />
        <motion.div className="short__intro" variants={rightSlideVariant} initial="initial" animate="animate" exit="exit" >
          <p>
            I&#x27;m Olorunfemi Akanbi, a Nigeria based web <text className="gold">designer</text>{" "}
            &amp; front‑end developer focused on crafting{" "}
            <text className="gold"> clean</text> &amp; user‑friendly
            experiences, I am passionate about building
            <text className="gold"> excellent </text>
            software that improves the lives of those around me.
          </p>
        </motion.div>
      </section>
      <FlexNav />
    </>
  );
};

export default HomeBody;
