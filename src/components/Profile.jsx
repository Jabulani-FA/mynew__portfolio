import React, { useEffect, useState } from "react";
import Header from "./Header";
import FlexNav from "./FlexNav";
// import Evergreen from "../assets/images/web-pages/Evergreen.png";
import { fetchProjects } from "../functions/projects";
import ProjectCard from "./reusable/ProjectCard";
import floatingObject from "../assets/shapes/h11_services_shape01.svg";
import LoadingProjectCard from "./reusable/LoadingProjectCard";

const Profile = () => {
  const [projectList, setprojectList] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");
  const loadingCount = 3;
  const [loading, setloading] = useState(false);
  useEffect(() => {
    document.title = "Olorunfemi- My Projects";
  }, []);

  useEffect(() => {
    setloading(true);
    fetchProjects()
      .then((res) => {
        // console.log(res.data)
        setprojectList(res.data);
        setloading(false);
      })
      .catch((err) => {
        // console.log(err)
        seterrorMessage(err.message);
        setloading(false);
      });
  }, []);

  return (
    <div>
      <Header fore="Profile" back="About-Me" />
      <div className="container flex justify-center">
        <h1 className="stalemate-regular font-xxl mb-0 mt-0">
          Showcase of my<span className="gold"> works</span>!
        </h1>
      </div>
      {loading ? (
        <div className="d-flex container justify-center mt-30">
          {Array.from({ length: loadingCount }).map((_, index) => (
            <LoadingProjectCard key={index} />
          ))}
        </div>
      ) : (
        <div className="d-flex justify-center">
          <div className="project__box">
            {projectList.map((project, i) => (
              <div key={i}>
                <ProjectCard project={project} i={i} />
              </div>
            ))}
          </div>
        </div>
      )}
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
