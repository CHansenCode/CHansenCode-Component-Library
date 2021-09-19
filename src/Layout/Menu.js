import css from "./Menu.module.scss";

const Menu = () => {
  return (
    <header className={css.header}>
      <h3>CHansenCode - Component Library</h3>
      <div></div>
      <div className={css.colorPicker}>color picker</div>
    </header>
  );
};

export default Menu;
