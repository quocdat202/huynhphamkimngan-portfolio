import React, { useContext } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "../../Context";
import project2 from "../../img/project2.png";
import project3 from "../../img/project3.png";
import project4 from "../../img/project4.png";
import samsung from "../../img/samsung.png";
import datacenter from "../../img/datacenter.png";
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
          <a href="https://drive.google.com/drive/folders/1D_ODFTKhqYON8u20UiFfOwJMnfgRk7Zt" target="_blank">
            <img src={datacenter} alt="Project Samsung" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://drive.google.com/file/d/19-j7t2v90xxBTAxo8bStNj3KwqwbR9OP/view" target="_blank">
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
        <SwiperSlide>
          <a href="https://docs.google.com/spreadsheets/d/1Jd4XnT1YQz0fBbrqQ5MAJ_6ZFVxbXldZ5U5U3SiTn5c/edit?usp=sharing" target="_blank">
            <img src={project4} alt="Project Chinsu" />
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
