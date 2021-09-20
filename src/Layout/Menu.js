import css from "./Menu.module.scss";

const Menu = () => {
  return (
    <>
      <header className={css.headerBg} />
      <header className={css.header}>
        <h3>CHansenCode</h3>
        <h4>Component Library</h4>
        <div className={css.colorPicker}>
          <div></div>
        </div>
      </header>
    </>
  );
};

export default Menu;
