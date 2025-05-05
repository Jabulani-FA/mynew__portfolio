import React from "react";
import Header from "./Header";
import FlexNav from "./FlexNav";
// TestimonialSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import quotationMark from "../assets/shapes/quotation-mark.svg";

import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper/modules";

const testimonials = [
  {
    name: "Adegboye Opeyemi",
    message: "This service exceeded my expectations. Highly recommended!",
    role: "Employer, Zentedge Solutions",
  },
  {
    name: "Evergreen projects",
    message: "Amazing experience. Everything was smooth and professional.",
    role: "Client",
  },
  {
    name: "Dermatologist Connect",
    message: "Top-notch service with great attention to detail.",
    role: "Client",
  },
  {
    name: "Swift Eagle Global",
    message: "Very professional team. Will definitely come back again.",
    role: "Client",
  },
];

const Testimonial = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Header fore="Reviews" back="Testimonials" />
      <section className="mb-100">
        <p className="d-flex justify-center font-xxl stalemate-regular mb-0">
          <span className="gold"> What</span> Employers and {" "}
          <span className="gold">{" "} Clients</span>Say
        </p>
        <div className="d-flex container w-full max-w-6xl mx-auto px-4 py-40 mb-50 mt-0">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            speed={800}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="testimonial-slide">
                <div className="swiper-container project-active fix">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="project__item">
                        <div className="project__thumb">
                          <img
                            className="bg-quote"
                            src={quotationMark}
                            alt="bg-logo"
                          />
                          <big className="italic mb-4">"{t.message}"</big>
                          <h4 className="text-xl font-semibold">{t.name}</h4>
                          <span className="text-gray-500">{t.role}</span>
                          {/* <img src="" sizes="12" alt="img" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="project__nav-wrap">
                    <button className="project-button-prev">
                        <img src="assets/img/icons/right_arrow.svg" alt="" className="injectable">
                    </button>
                    <button className="project-button-next">
                      <img
                        src="assets/img/icons/right_arrow.svg"
                        alt=""
                        className="injectable"
                      />
                    </button>
                  </div> */}
                </div>
                {/* <div className="bg-white text-black shadow-lg rounded-xl transition-all duration-700 ease-in-out rounded-xl p-20 py-40 rad-5 mt-20 text-center h-full">
                  <img className="bg-quote" src={quotationMark} alt="bg-logo" />
                  <p className="text-lg italic mb-4">"{t.message}"</p>
                  <h4 className="text-xl font-semibold">{t.name}</h4>
                  <span className="text-gray-500">{t.role}</span>
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <FlexNav />
    </div>
  );
};

export default Testimonial;
