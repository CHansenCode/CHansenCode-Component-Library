import { useState } from "react";

import Menu from "./Menu";

//Pages
import Forms from "../pages/Forms";
import Etc from "../pages/Etc";
import Landing from "../pages/Landing";
import Svg from "../pages/Svg";

const Layout = ({ children }) => {
  const [color, setColor] = useState({ r: 50, g: 160, b: 140, a: 0 });
  const styleColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

  const [activePage, setActivePage] = useState("landing");

  const pageSwitch = (activePage) => {
    switch (activePage) {
      case "forms":
        return <Forms />;
      case "etc":
        return <Etc />;
      case "svg":
        return <Svg />;
      case "landing":
        return <Landing />;
      default:
        return <Landing />;
    }
  };
  return (
    <>
      <Menu styleColor={styleColor} setColor={setColor} activePage={activePage} setActivePage={setActivePage} />
      <main style={{ color: `rgb(${color.r}, ${color.g}, ${color.b})` }}>{pageSwitch(activePage)}</main>
      <footer />
    </>
  );
};

export default Layout;
