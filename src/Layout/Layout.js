import { useState } from "react";

import Menu from "./Menu";

const Layout = ({ children }) => {
  const [color, setColor] = useState({ r: 50, g: 160, b: 140, a: 0 });
  const styleColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
  return (
    <>
      <Menu styleColor={styleColor} setColor={setColor} />
      <main style={{ color: `rgb(${color.r}, ${color.g}, ${color.b})` }}>{children}</main>
      <footer />
    </>
  );
};

export default Layout;
