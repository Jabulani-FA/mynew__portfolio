import React, {useEffect} from "react";
import Header from "./Header";
import FlexNav from "./FlexNav";
import Evergreen from "../assets/images/web-pages/Evergreen.png";
import ProjectCard from "./reusable/ProjectCard";
import floatingObject from "../assets/shapes/h11_services_shape01.svg";

const Profile = () => {
  useEffect(() => {
    document.title = "Olorunfemi- My Projects"
  }, [])
  const projectList = [
    {
      link_title: "Dermatologist and Spa website",
      source: "https://res.cloudinary.com/dpcczs67n/image/upload/v1742977644/olorunfemi-portfolio/zn7dk6mxh1kskoqsut6p.png",
      title: "Dermatologist connect",
      description:
        "Booking of session with a dermatologist and also spa services and skin treatments",
      stacks: ["Html", "Css", "Js"],
      source_link: "https://dermatologistconnect.com",
    },
    {
      link_title: "Project Management",
      source: "https://res.cloudinary.com/dpcczs67n/image/upload/v1742977639/olorunfemi-portfolio/miammzervqdfdflbpbld.png",
      title: "Evergreen Projects",
      description:
        "Booking of session with a dermatologist and also spa services and skin treatments",
      stacks: ["Node", "Html", "Css", "Js"],
      source_link: "https://evergreenprojects.com",
    },
    {
      link_title: "Dermatologist and Spa website",
      source: "https://res.cloudinary.com/dpcczs67n/image/upload/v1743026752/olorunfemi-portfolio/krm0nxjiqc4boa3avelf.png",
      title: "Swift Eagle Global",
      description:
        "Booking of session with a dermatologist and also spa services and skin treatments",
      stacks: ["Html", "Css", "Js"],
      source_link: "https://dermatologistconnect.com",
    },
    {
      link_title: "Seminary school website",
      source: Evergreen,
      title: "PBTS",
      description:
        "Full information about the seminary, different study package and loctions, with emailing service",
      stacks: ["Html", "Css", "Js"],
      source_link: "https://dermatologistconnect.com",
    },
  ];

  return (
    <div>
      <Header fore="Profile" back="About-Me" />
      <div className="container flex justify-center">
        <h1 className="stalemate-regular font-xxl mb-0 mt-0">
          Works<span className="gold"> I</span> have{" "}
          <span className="gold">done</span>!
        </h1>
      </div>
      <div className="d-flex justify-center">
        <div className="project__box">
          {projectList.map((project, i) => (
            <div key={i}>
              <ProjectCard project={project} i={i} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          src={floatingObject}
          alt="floating_object"
          className="fixed__left__object"
        />
      </div>
      <section className="mt-20">
        <FlexNav />
      </section>
    </div>
  );
};

export default Profile;
