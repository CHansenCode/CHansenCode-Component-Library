import { useState } from "react";

import NavBar from "./NavBar";

//Pages
import Forms from "../pages/Forms";
import Etc from "../pages/Etc";
import Landing from "../pages/Landing";
import Svg from "../pages/Svg";

const Layout = ({ children }) => {
  const [primary, setPrimary] = useState({ r: 50, g: 160, b: 140, a: 0 });
  const [secondary, setSecondary] = useState({ r: 190, g: 80, b: 50, a: 0 });

  const primaryString = `rgb(${primary.r}, ${primary.g}, ${primary.b})`;
  const secondaryString = `rgb(${secondary.r}, ${secondary.g}, ${secondary.b})`;

  const [activePage, setActivePage] = useState("etc");

  const pageSwitch = (activePage) => {
    switch (activePage) {
      case "forms":
        return <Forms primary={primaryString} secondary={secondaryString} />;
      case "etc":
        return <Etc primary={primaryString} secondary={secondaryString} />;
      case "svg":
        return <Svg primary={primaryString} secondary={secondaryString} />;
      case "landing":
        return <Landing primary={primaryString} secondary={secondaryString} />;
      default:
        return <Landing primary={primaryString} secondary={secondaryString} />;
    }
  };

  return (
    <>
      <NavBar
        primaryString={primaryString}
        secondaryString={secondaryString}
        setPrimary={setPrimary}
        setSecondary={setSecondary}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main style={{ color: primaryString }}>{pageSwitch(activePage)}</main>
      <footer />
    </>
  );
};

export default Layout;
