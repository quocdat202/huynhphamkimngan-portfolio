import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { dataContext } from "../../data/DataContext";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const data = useContext(dataContext);
  const experience = data?.experience;

  if (!experience) return null;

  return (
    <div className="experience" id="experience">
      {experience.achievements.map((item, index) => (
        <div className="achievement" key={index}>
          <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
            {item.value}
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>{item.label1} </span>
          <span>{item.label2}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;
