import React, { useContext } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "../../Context";
import project2 from "../../img/project2.png";
import project3 from "../../img/project3.png";
import samsung from "../../img/samsung.png";
import "./Portfolio.css";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      {/* <span>Portfolio</span> */}

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://drive.google.com/file/d/18r05LXgHPYBeFn1EsqU5Slhpsh6o8MxO/view" target="_blank">
            <img src={samsung} alt="Project Samsung" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://docs.google.com/document/d/1u1UR05Tzn6zJmwq595wxCtGCMjjemHnOgtRSNonyvqs/edit" target="_blank">
            <img src={project2} alt="Gương vỡ" style={{ height: 213 }} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://drive.google.com/file/d/17Ux9EFxVVVHxmOgAsQPtkKElrWw5k8-S/view" target="_blank">
            <img src={project3} alt="Project Chinsu" />
          </a>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
