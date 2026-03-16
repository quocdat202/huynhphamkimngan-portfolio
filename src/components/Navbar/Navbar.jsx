import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { dataContext } from "../../data/DataContext";

const Navbar = () => {
  const data = useContext(dataContext);
  const navbar = data?.navbar;

  if (!navbar) return null;

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">{navbar.name}</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            {navbar.links.map((link, index) => (
              <li key={index}>
                <Link
                  activeClass={index === 0 ? "active" : undefined}
                  to={link.to}
                  spy={true}
                  smooth={true}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to={navbar.ctaTo} spy={true} smooth={true}>
          <button className="button n-button">{navbar.ctaLabel}</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
