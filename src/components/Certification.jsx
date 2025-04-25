import React, { useEffect, useRef } from "react";
import Header from "./Header";
import FlexNav from "./FlexNav";
import img1 from "../assets/certifications/1.png";
import img2 from "../assets/certifications/2.png";
import img3 from "../assets/certifications/3.png";
import img4 from "../assets/certifications/4.png";
import { motion } from "framer-motion";
import { rightAnimation } from "./functions/animations";

const Certification = () => {
  const cardRef = useRef();
  const certificationList = [
    {
      certImg: img1,
      title: "React Redux E-commerce",
      year: "2024",
    },
    {
      certImg: img2,
      title: "Learn Ethical Hacking From Scratch",
      year: "2024",
    },
    {
      certImg: img3,
      title: "Learn Ethical Hacking Practically",
      year: "2020",
    },
    {
      certImg: img4,
      title: "Introduction To Cybersecurity Awareness",
      year: "2024",
    },
  ];

  useEffect(() => {
    document.title = "Olorunfemi- My Certifications";
  }, []);
  return (
    <>
      <Header fore="Feats" back="Certification" />
      <div className="d-flex container mt-20 mb-50">
        <div className="d-flex">
          {certificationList.map((cert, i) => (
            <div key={i} style={{ padding: 10 }}>
              <motion.div
                className="card"
                id={i}
                variants={rightAnimation(i * 0.6)}
                initial="initial"
                animate="visible"
                exit="exit"
                ref={cardRef}
              >
                <img
                  src={cert.certImg}
                  style={{
                    maxWidth: 500,
                    width: 350,
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 5,
                  }}
                  alt={cert.title}
                />
                <div className="p-10 m-0 pt-0 pb-0 mb-0">
                  <h5 className="mb-0">Course:</h5>
                  <h4 className="mt-0 mb-0">{cert.title}</h4>
                </div>
                <div className="p-10 pt-0 mt-0 align-center">
                  <h5 className="mb-0">Completed: </h5>
                  <h4 className="mt-0 mb-0"> {cert.year}</h4>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <FlexNav />
    </>
  );
};

export default Certification;
