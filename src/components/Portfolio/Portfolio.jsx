import React, { useContext } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "../../Context";
import { dataContext } from "../../data/DataContext";
import "./Portfolio.css";

const projectImages = {
  productX: require("../../img/productX.jpg"),
  datacenter: require("../../img/datacenter.png"),
  samsung: require("../../img/samsung.png"),
  project2: require("../../img/project2.png"),
  project3: require("../../img/project3.png"),
  project4: require("../../img/project4.png"),
};

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const data = useContext(dataContext);
  const portfolio = data?.portfolio;

  if (!portfolio) return null;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>{portfolio.title}</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {portfolio.projects.map((project, index) => (
          <SwiperSlide key={index}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <img
                src={projectImages[project.image]}
                alt={project.alt}
                style={project.imageHeight ? { height: project.imageHeight } : {}}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
