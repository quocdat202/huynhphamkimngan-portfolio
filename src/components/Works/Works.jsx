import React, { useContext } from "react";
import "./Works.css";
import canva from "../../img/canva.png";
import Fiverr from "../../img/fiverr.png";
import studio from "../../img/studio.png";
import capcut from "../../img/capcut.png";
import office from "../../img/office.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            I can use all these tools
          </span>
          <span></span>
          <spane>
            I have used Canva and Capcut for editing
            <br />
            I have studied social media data analysis using Looker Studio
            <br />

          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={canva} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" style={{ maxWidth: '150px' }} />
          </div>
          <div className="w-secCircle">
            <img src={office} alt="Office" style={{ maxWidth: '200px' }} />
          </div>{" "}
          <div className="w-secCircle">
            <img src={studio} alt="" style={{ maxWidth: '350px' }} />
          </div>
          <div className="w-secCircle">
            <img src={capcut} alt="" style={{ maxWidth: '150px' }} />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
