import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <footer />
    </>
  );
};

export default Layout;
