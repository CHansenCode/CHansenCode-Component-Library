import { useState } from "react";

import Button from "../Button/Button";

const Dropdown = ({ activePage, height, children }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [activeCategory, setActiveCategory] = useState("cow");

  const arr = [{ title: "cow" }, { title: "fox" }, { title: "cat" }, { title: "dog" }];

  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  const style = {
    wrapper: {
      position: "relative",
      height: height,
      width: "320px",
    },
    ul: {
      position: "absolute",
      zIndex: 3,
      top: "calc(100% - 1px)",
      left: 0,

      width: "100%",
      height: open ? "auto" : "1px",
      opacity: open ? "1" : "0",

      border: "thin solid",
      borderTop: "none",

      padding: "0",
      margin: "-1px 0 0 0",

      overflow: "hidden",
      cursor: "pointer",
    },
  };

  return (
    <div style={style.wrapper}>
      <Button width="100%" height="100%" border="none" onClick={() => setOpen(!open)}>
        <h4 style={{ textTransform: "capitalize" }}>{activePage}</h4>
      </Button>

      <ul
        style={style.ul}
        onClick={() => setOpen(!open)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;

export const ListItem = ({ text, onClick, activeCategory }) => {
  const [liHover, setLiHover] = useState(false);

  const handleMouseEnter = () => {
    setLiHover(true);
  };
  const handleMouseLeave = () => {
    setLiHover(false);
  };

  const style = {
    li: {
      listStyle: "none",
      padding: "0 1rem",
      width: "100%",
      height: "100%",
      transition: "0.3s ease",
      backgroundColor: liHover ? "currentColor" : "rgb(255,255,255)",
      borderTop: "thin solid",
    },
    p: {
      color: activeCategory === text ? "white" : liHover ? "rgb(255,255,255)" : "currentColor",
    },
  };

  return (
    <li style={style.li} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={onClick}>
      <p style={style.p}>{text}</p>
    </li>
  );
};
