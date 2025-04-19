import React, { useEffect } from "react";
import Header from "./Header";
import FlexNav from "./FlexNav";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaHandshake,
  FaComments,
  FaFileContract,
  FaLaptopCode,
  FaClipboardCheck,
  FaRocket,
  FaSyncAlt,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    document.title = "Link with Olorunfemi";
  }, []);

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
      <section className="container">
        <h3 className="stalemate-regular font-lg mb-0 d-flex justify-center">
          Info On How It  {" "} <span className="gold"> Works!</span>
        </h3>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "#f3f4f6", color: "#111827" }}
            iconStyle={{ background: "#2563eb", color: "#fff" }}
            icon={<FaHandshake />}
          >
            <h3>1. Initial Contact</h3>
            <p>
              Reach out to us via call, email, or our contact form. We’ll
              acknowledge your inquiry promptly and schedule a discovery
              session.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "#f3f4f6", color: "#111827" }}
            iconStyle={{ background: "#4b5563", color: "#fff" }}
            icon={<FaComments />}
          >
            <h3>2. Discovery & Consultation</h3>
            <p>
              We engage in a thorough conversation to understand your business
              needs, design preferences, target audience, and technical
              requirements.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "#f3f4f6", color: "#111827" }}
            iconStyle={{ background: "#10b981", color: "#fff" }}
            icon={<FaFileContract />}
          >
            <h3>3. Proposal & Agreement</h3>
            <p>
              We send you a comprehensive project proposal and quotation. Once
              approved, both parties sign a contract outlining the scope,
              timeline, and deliverables.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "#f3f4f6", color: "#111827" }}
            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
            icon={<FaLaptopCode />}
          >
            <h3>4. Design & Development</h3>
            <p>
              Our team gets to work building your custom website or executing
              the consultancy services. We ensure constant communication and
              milestone updates.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "#f3f4f6", color: "#111827" }}
            iconStyle={{ background: "#f59e0b", color: "#fff" }}
            icon={<FaClipboardCheck />}
          >
            <h3>5. Project Review & Testing</h3>
            <p>
              We conduct internal reviews and testing for functionality,
              responsiveness, and design fidelity. You’re invited to review and
              give final feedback.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "#f3f4f6", color: "#111827" }}
            iconStyle={{ background: "#10b981", color: "#fff" }}
            icon={<FaRocket />}
          >
            <h3>6. Launch & Handover</h3>
            <p>
              Upon your approval, we go live! You receive full ownership,
              training (if needed), and documentation to manage your website
              confidently.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "#f3f4f6", color: "#111827" }}
            iconStyle={{ background: "#ef4444", color: "#fff" }}
            icon={<FaSyncAlt />}
          >
            <h3>7. Ongoing Support & Revamp</h3>
            <p>
              We stay available for maintenance, periodic upgrades, or complete
              revamps as your business grows and evolves.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
      <section className="right__col bottom-space">
        <motion.div
          variants={dropAnimationTop}
          initial="initial"
          animate="animate"
          exit="exit"
          className="ephesis-regular mb-0"
        >
          <h3 className="stalemate-regular font-lg">
            Tell Me Your <span className="gold"> Preference</span>
          </h3>
        </motion.div>
        <form className="form-group">
          <input type="text" className="form-control" placeholder="Your Name" />
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
          />
          <textarea
            rows={1}
            className="form-control"
            placeholder="I have a budget of"
          />
          <textarea
            rows={2}
            className="form-control"
            placeholder="I want to build........"
          />
          <button>Submit</button>
        </form>
      </section>
      <FlexNav />
    </div>
  );
};

export default Contact;
