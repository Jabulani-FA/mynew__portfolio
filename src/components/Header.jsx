import React, { useState } from "react";
import OA from "../assets/images/OA.png";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
// import { animated } from "@react-spring/web";

const Header = ({ fore, back }) => {
  const navigate = useNavigate();
  const [revealName, setrevealName] = useState(false);
  const downSlideVariant = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
      }
    },
    exit: {
      y: "-100%",
      opacity: 0,
    }
  };
  const downSlideVariantOther = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay: 1,
      }
    },
    exit: {
      y: "-100%",
      opacity: 0,
    }
  };
  
  return (
    <header className="header__dark">
      <div className="logo-box">
        <img
          src={OA}
          alt="Olorunfemi's Logo."
          style={{
            width: "100px",
            marginBottom: "-40px",
            transition: "easeInOut 2s",
          }}
          onClick={() => navigate("/")}
        />
        {revealName ? (
          <h3
            onMouseLeave={() => setrevealName(false)}
            className="name-transition pointer jura-uniq heavy"
          >
            Olorunfemi <text className="gold"> Akanbi</text>
          </h3>
        ) : (
          <h3
            onMouseOver={() => setrevealName(true)}
            className="name-transition pointer jura-uniq heavy"
          >
            O<text className="gold">A</text>
          </h3>
        )}
      </div>
      <div className="header__text">
        <motion.h4
          variants={downSlideVariantOther}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {fore ? fore : "Akanbi"}
        </motion.h4>
        <motion.h3
          variants={downSlideVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {back ? back : "Olorunfemi"}
        </motion.h3>
      </div>
    </header>
  );
};

export default Header;
