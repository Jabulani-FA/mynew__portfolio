import React from "react";
import testimonial from "../assets/images/icons/testimonial2.svg";
import home from "../assets/images/icons/home-1-svgrepo-com.svg";
import certificate from "../assets/images/icons/certificate.svg";
import contact from "../assets/images/icons/contact.svg";
import profile from "../assets/images/icons/note.svg";
import { useLocation, useNavigate } from "react-router";

const FlexNav = () => {
  const navigate = useNavigate();
  const locations = useLocation();
  console.log(locations.pathname.split("/")[1]);
  return (
    <>
      <nav className="nav__fixed__position">
        <div className={`menu__option ${locations.pathname.split("/")[1]===""&&"active"}`} onClick={() => navigate("/")}>
          <img src={home} alt="home" />
        </div>
        <div className={`menu__option ${locations.pathname.split("/")[1]==="profile"&&"active"}`} onClick={() => navigate("/profile")}>
          <img src={profile} alt="profile" />
        </div>
        <div className={`menu__option ${locations.pathname.split("/")[1]==="testimonial"&&"active"}`} onClick={() => navigate("/testimonial")}>
          <img src={testimonial} alt="testimonial" />
        </div>
        <div className={`menu__option ${locations.pathname.split("/")[1]==="certification"&&"active"}`} onClick={() => navigate("/certification")}>
          <img src={certificate} alt="certification" onClick={() => navigate("/certification")}/>
        </div>
        <div className={`menu__option ${locations.pathname.split("/")[1]==="contact"&&"active"}`} onClick={() => navigate("/contact")}>
          <img src={contact} alt="contact-me" />
        </div>
      </nav>
      
    </>
  );
};

export default FlexNav;
