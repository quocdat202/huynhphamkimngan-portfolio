import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import avt from "../../img/avt.png";
import FacebookIntro from "../../img/FacebookIntro.png";
import glassesimoji from "../../img/glassesimoji.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";
import "./Intro.css";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Huynh Pham Kim Ngan</span>
          <span>
            I am a 4th year student majoring in Digital Marketing. I have a passion for Marketing
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://www.facebook.com/profile.php?id=100028093669571&mibextid=LQQJ4d" target="_blank">
            <img src={FacebookIntro} alt="" style={{ height: 90 }} />
          </a>
          <a href="https://www.linkedin.com/in/nganhuyn" target="_blank">
            <img src={LinkedIn} alt="LinkedIn Profile" />
          </a>
          <a href="https://www.instagram.com/hpkim.ngaan?igsh=OWxpM3oxZHlwZmNn&utm_source=qr" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={avt} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        {/* <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div> */}

        {/* animation */}
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div> */}

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
