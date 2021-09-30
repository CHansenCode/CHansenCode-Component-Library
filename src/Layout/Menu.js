import { useState } from "react";

import { ChromePicker } from "react-color";
import css from "./Menu.module.scss";

import { ListItem } from "../components/Dropdown/Dropdown";

import Dropdown from "../components/Dropdown/Dropdown";

const Menu = ({ styleColor, setColor, activePage, setActivePage }) => {
  const [state, setState] = useState({
    showColorPicker: false,
  });

  const handleChangeComplete = (color, event) => {
    setColor(color.rgb);
  };
  return (
    <>
      <header style={{ color: styleColor }} className={css.header}>
        <h3>CHansenCode</h3>
        <h4>Component Library</h4>

        <div className={css.dropdown}>
          <Dropdown activePage={activePage}>
            <ListItem text="Landing" onClick={() => setActivePage("landing")} />
            <ListItem text="Forms" onClick={() => setActivePage("forms")} />
            <ListItem text="Etc" onClick={() => setActivePage("etc")} />
            <ListItem text=".SVG" onClick={() => setActivePage("svg")} />
          </Dropdown>
        </div>

        <div style={{ display: "flex" }} className={css.colorPickerMenu}>
          <button
            style={{ backgroundColor: styleColor, color: "#fff" }}
            onClick={() => setState({ ...state, showColorPicker: !state.showColorPicker })}
          >
            Color picker
          </button>
          {state.showColorPicker && (
            <div className={css.colorPickerWrapper}>
              <ChromePicker color={styleColor} onChangeComplete={handleChangeComplete} />{" "}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Menu;
