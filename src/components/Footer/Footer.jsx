import React, { useContext } from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { dataContext } from "../../data/DataContext";

const iconComponents = {
  instagram: Insta,
  facebook: Facebook,
  github: Gitub,
};

const Footer = () => {
  const data = useContext(dataContext);
  const footer = data?.footer;

  if (!footer) return null;

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>{footer.email}</span>
        <div className="f-icons">
          {footer.socialLinks.map((social, index) => {
            const IconComponent = iconComponents[social.platform];
            if (social.url) {
              return (
                <a href={social.url} target="_blank" rel="noreferrer" key={index}>
                  <IconComponent color="white" size={"3rem"} />
                </a>
              );
            }
            return <IconComponent color="white" size={"3rem"} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
