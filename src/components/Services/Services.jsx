import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { dataContext } from "../../data/DataContext";
import { motion } from "framer-motion";
import Resume from './CV_Huynh_Pham_Kim_Ngan_Marketing_Intern.pdf';

const emojiImages = {
  heartemoji: require("../../img/heartemoji.png"),
  glasses: require("../../img/glasses.png"),
  humble: require("../../img/humble.png"),
};

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const data = useContext(dataContext);
  const services = data?.services;

  if (!services) return null;

  const transition = {
    duration: 1,
    type: "spring",
  };

  const cardPositions = [
    { initial: { left: "25rem" }, whileInView: { left: "14rem" } },
    { initial: { left: "-11rem", top: "12rem" }, whileInView: { left: "-4rem" } },
    { initial: { top: "19rem", left: "25rem" }, whileInView: { left: "12rem" } },
  ];

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>{services.title}</span>
        <span>{services.subtitle}</span>
        <spane>
          {services.description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </spane>
        <a href={Resume} download>
          <button className="button s-button">{services.buttonText}</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {services.cards.map((card, index) => (
          <motion.div
            key={index}
            initial={cardPositions[index].initial}
            whileInView={cardPositions[index].whileInView}
            transition={transition}
          >
            <Card
              emoji={emojiImages[card.emoji]}
              heading={card.heading}
              detail={card.detail}
              color={card.color}
            />
          </motion.div>
        ))}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
