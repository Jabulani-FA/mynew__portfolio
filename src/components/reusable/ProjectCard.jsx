import React, { useEffect, useRef, useState } from "react";
import ArrowRight from "../../assets/images/icons/arrow-right.svg";
import ja from "../../assets/images/icons/js.svg";
import cs from "../../assets/images/icons/css.svg";
import Ht from "../../assets/images/icons/Html.svg";
import rreact from "../../assets/images/icons/react.svg";
import nodejs from "../../assets/images/icons/node.svg";
import { motion } from "framer-motion";
import cardshape from "../../assets/shapes/h11_services_shape02.svg";

const ProjectCard = ({ project, i }) => {
  const cardRef = useRef();
  const [isvisible, setisvisible] = useState(false);
  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setisvisible(rect.top >= 0 && rect.top <= window.innerHeight);
    }
  }, []);

  const dropAnimation = (delayState) => ({
    initial: {
      x: "-100%",
      y: "100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 100,
        delay: !delayState,
      },
    },
    exit: {
      x: 0,
      opacity: 0,
    },
  });
  const dropAnimation2 = {
    initial: {
      x: "100%",
      y: "100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 40,
      },
    },
    exit: {
      x: 0,
      opacity: 0,
    },
  };

  const rightAnimation = (delay) => ({
    initial: {
      x: 0,
      opacity: 0,
    },
    visible: {
      x: 100,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: delay,
        duration: 0.6 + delay,
      },
    },
    exit: {
      x: 0,
      opacity: 0,
    },
  });
  useEffect(() => {
    console.log(isvisible);
  }, [isvisible]);

  return (
    <motion.div
      className="project__card"
      id={i}
      variants={rightAnimation(i * 0.6)}
      initial="initial"
      animate="visible"
      exit="exit"
      ref={cardRef}
    >
      <div className="project__snippet">
        <img
          className="project__snippet mb-0"
          src={project.source}
          alt={project.link_title}
        />
      </div>
      <div className="project__description">
        <h3 className="ephesis-regular mb-0">
          <strong>{project.title}</strong>
        </h3>
        <div className="card__description">
          <p>
            {project.description && project.description.length > 75
              ? project.description.substring(0, 75) + "..."
              : project.description}
          </p>
        </div>
        <div className="flex gap-5">
          {project.stacks &&
            project.stacks.map((stack, i) => (
              <div key={i}>
                <img
                  src={
                    stack === "Html"
                      ? Ht
                      : stack === "Css"
                      ? cs
                      : stack === "Node"
                      ? nodejs
                      : stack === "Js"
                      ? ja
                      : stack === "React" && rreact
                  }
                  alt={stack}
                  className="stack__img"
                />
              </div>
            ))}
        </div>
        <motion.div
          variants={dropAnimation(isvisible)}
          initial="initial"
          animate="animate"
          exit="exit"
          className="card__shapes"
        >
          <div />
        </motion.div>
        <button className="ephesis-regular">
          Visit Site{" "}
          <img
            className="card__arrow"
            src={ArrowRight}
            alt="website link icon"
          />{" "}
        </button>
      </div>
      <motion.div
        variants={dropAnimation2}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <img
          src={cardshape}
          className="card__bottom__decoration"
          alt="card__bottom__decoration"
          width="70px"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
