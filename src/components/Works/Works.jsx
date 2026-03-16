import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { dataContext } from "../../data/DataContext";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const toolImages = {
  canva: require("../../img/canva.png"),
  fiverr: require("../../img/fiverr.png"),
  studio: require("../../img/studio.png"),
  capcut: require("../../img/capcut.png"),
  office: require("../../img/office.png"),
};

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const data = useContext(dataContext);
  const works = data?.works;

  if (!works) return null;

  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            {works.title}
          </span>
          <span>{works.subtitle}</span>
          <spane>
            {works.description.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">{works.buttonText}</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          {works.tools.map((tool, index) => (
            <div className="w-secCircle" key={index}>
              <img
                src={toolImages[tool.image]}
                alt={tool.name}
                style={tool.maxWidth ? { maxWidth: tool.maxWidth } : {}}
              />
            </div>
          ))}
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
