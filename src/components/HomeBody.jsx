import React, { useRef, useState } from "react";
import Header from "./Header";
import FlexNav from "./FlexNav";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import { leftSlideVariant, rightSlideVariant } from "./functions/animations";
import { useNavigate } from "react-router";

const HomeBody = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header fore="Akanbi" back="Olorunfemi" />
      <section className="intro__design">
        <motion.div
          className="developer__profile__photo"
          variants={leftSlideVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        />
        <motion.div
          className="short__intro"
          variants={rightSlideVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <p className="font-xxl stalemate-regular mb-0">
            <span className="gold"> Who</span> Am{" "}
            <span className="gold"> I</span> ?
          </p>
          <p className="mt-0">
            I&#x27;m Olorunfemi Akanbi, a Nigeria based web{" "}
            <text className="gold">designer</text> &amp; front‑end developer
            focused on crafting <text className="gold"> clean</text> &amp;
            user‑friendly experiences, I am passionate about building
            <text className="gold"> excellent </text>
            software that improves the lives of those around me.
          </p>
        </motion.div>
      </section>
      <section className="my__services container">
        <p className="font-xxl stalemate-regular mb-0">
          <span className="gold"> What</span> Can I{" "}
          <span className="gold"> Help</span> You With
        </p>
        <VerticalTimeline>
          {/* React Front‑End */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 – Present"
            iconStyle={{ background: "gold", color: "black" }}
            icon={<FaReact />}
            contentStyle={{ background: "#f3f4f6", color: "#111827"  }}
            contentArrowStyle={{ borderRight: "7px solid black" }}
          >
            <h3 className="vertical-timeline-element-title">
              React Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vite & Next.js
            </h4>
            <p>
              • SPA architecture with React Router & Next.js routing
              <br />
              • State management using Context API, Redux, or React Query
              <br />• Styling with Tailwind CSS, CSS Modules, and
              Styled‑Components
            </p>
          </VerticalTimelineElement>

          {/* HTML / CSS / JS */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 – 2020"
            iconStyle={{ background: "#2563eb", color: "#fff" }}
            icon={<FaHtml5 />}
            contentStyle={{ background: "#f3f4f6", color: "#111827" }}
            contentArrowStyle={{ borderRight: "7px solid black" }}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Markup & Scripting
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              HTML, CSS & JavaScript
            </h4>
            <p>
              • Semantic HTML5 & accessibility best practices
              <br />
              • Responsive layouts with Flexbox & CSS Grid
              <br />• Modern JS (ES6+), DOM manipulation & Web APIs
            </p>
          </VerticalTimelineElement>

          {/* Node.js Backend */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 – Present"
            iconStyle={{ background: "#10b981", color: "#fff" }}
            icon={<FaNodeJs />}
            contentStyle={{ background: "#f3f4f6", color: "#111827" }}
            contentArrowStyle={{ borderRight: "7px solid black" }}
          >
            <h3 className="vertical-timeline-element-title">
              Backend Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Node.js & REST APIs
            </h4>
            <p>
              • Express.js server architecture
              <br />
              • JWT authentication & role-based access control
              <br />• Error handling, logging & validation middleware
            </p>
          </VerticalTimelineElement>

          {/* Databases */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 – Present"
            iconStyle={{ background: "#f3f4f6", color: "#111827" }}
            icon={<FaDatabase />}
            contentStyle={{ background: "#f3f4f6", color: "#111827"  }}
            contentArrowStyle={{ borderRight: "7px solid black" }}
          >
            <h3 className="vertical-timeline-element-title">Database Design</h3>
            <h4 className="vertical-timeline-element-subtitle">
              MongoDB, PostgreSQL, MySQL
            </h4>
            <p>
              • Schema modeling & indexing strategies
              <br />
              • Aggregation pipelines & transactions in MongoDB
              <br />• Complex SQL queries, joins & migrations
            </p>
          </VerticalTimelineElement>

          {/* DevOps & Tools */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 – Present"
            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
            icon={<FaGitAlt />}
            contentStyle={{ background: "#f3f4f6", color: "#111827" }}
            contentArrowStyle={{ borderRight: "7px solid black" }}
          >
            <h3 className="vertical-timeline-element-title">DevOps & CI/CD</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Git, Docker, GitHub Actions
            </h4>
            <p>
              • Version control workflows & branching strategies
              <br />
              • Docker containerization & orchestration basics
              <br />• Automated testing & deployment pipelines
            </p>
          </VerticalTimelineElement>

          {/* General Coding */}
          <VerticalTimelineElement
            iconStyle={{ background: "gold", color: "black" }}
            icon={<FaCode />}
            contentStyle={{ background: "#f3f4f6", color: "#111827" }}
            contentArrowStyle={{ borderRight: "7px solid black" }}
          >
            <h3 className="vertical-timeline-element-title">Let's Check Out My Projects</h3>
            <p>
              Click <button className="btn__cta" onClick={() => navigate("/profile")}>Projects</button> to see my previous works
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>

      <FlexNav />
    </>
  );
};

export default HomeBody;
