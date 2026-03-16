import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import { dataContext } from "../../data/DataContext";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import avt from "../../img/avt.png";
import glassesimoji from "../../img/glassesimoji.png";
import "./Intro.css";

const iconImages = {
  FacebookIntro: require("../../img/FacebookIntro.png"),
  linkedin: require("../../img/linkedin.png"),
  instagram: require("../../img/instagram.png"),
};

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const data = useContext(dataContext);
  const intro = data?.intro;

  if (!intro) return null;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>{intro.greeting}</span>
          <span>{intro.name}</span>
          <span>{intro.description}</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">{intro.buttonText}</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          {intro.socialLinks.map((social, index) => (
            <a href={social.url} target="_blank" rel="noreferrer" key={index}>
              <img
                src={iconImages[social.icon]}
                alt={social.alt || ""}
                style={social.iconHeight ? { height: social.iconHeight } : {}}
              />
            </a>
          ))}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={avt} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
