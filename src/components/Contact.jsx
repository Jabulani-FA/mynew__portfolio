import React, { useEffect } from "react";
import Header from "./Header";
import FlexNav from "./FlexNav";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    document.title = "Link with Olorunfemi"
  }, [])
  
  const dropAnimationTop = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 5,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };

  return (
    <div>
      <Header fore="Contact" back="Link-Me-Up" />
      <div className="right__col">
        <motion.div variants={dropAnimationTop} initial="initial" animate="animate" exit="exit" className="ephesis-regular mb-0">
          <h3 className="stalemate-regular font-lg">Tell us Your <span className="gold"> Preference</span></h3>
        </motion.div>
        <form className="form-group">
          <input type="text" className="form-control" placeholder="Your Name" />
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
          />
          <textarea
            rows={2}
            className="form-control"
            placeholder="I have a budget of"
          />
          <textarea
            rows={3}
            className="form-control"
            placeholder="I want to build........"
          />
          <button>Submit</button>
        </form>
      </div>
      <FlexNav />
    </div>
  );
};

export default Contact;