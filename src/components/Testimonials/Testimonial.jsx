import React, { useContext } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { dataContext } from "../../data/DataContext";

const clientImages = {
  profile1: require("../../img/profile1.jpg"),
  profile2: require("../../img/profile2.jpg"),
  profile3: require("../../img/profile3.jpg"),
  profile4: require("../../img/profile4.jpg"),
};

const Testimonial = () => {
  const data = useContext(dataContext);
  const testimonials = data?.testimonials;

  if (!testimonials) return null;

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        {testimonials.heading.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={clientImages[client.image]} alt="" />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
