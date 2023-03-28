import { useState } from "react";
import menuImg from "../../images/menu.png";
import contentImg from "../../images/courses.png";
import coursesImg from "../../images/content.png";
import "./Sidebar.css";

const arr = [
  { icon: contentImg, longText: "Content management", shortText: "" },
  { icon: coursesImg, longText: "Courses", shortText: "" },
];
const Sidebar = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  return (
    <div className="sidebar-wrapper">
      <div
        className={` sidebar ${toggleMenu ? "full-width" : "collapse-width"}`}
        data-testid="toggleMenu"
      >
        <div
          onClick={handleNavbar}
          data-testid="sidebar"
          className={`sidebar-menu ${
            toggleMenu ? "icon-pos-full" : "icon-pos-collapse"
          }`}
        >
          <img src={menuImg} alt="Menu" />
        </div>
        <div className="menu-wrapper">
          {arr.map((each, index) => {
            return (
              <div
                key={`${each.longText}-${index}`}
                className={`${toggleMenu ? "full-menu" : "collapse-menu"}`}
              >
                <div className="menu-img">
                  <img src={each.icon} className="sidebar-icon" />
                </div>
                <div className="menu-text">
                  {toggleMenu ? each.longText : each.shortText}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${
          !toggleMenu ? "full-width-content" : "collapse-width-content"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
