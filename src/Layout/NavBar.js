import { useState } from "react";

import { ChromePicker } from "react-color";
import css from "./Menu.module.scss";

import { ListItem } from "../components/Dropdown/Dropdown";

import Dropdown from "../components/Dropdown/Dropdown";

const NavBar = ({ primaryString, secondaryString, setPrimary, setSecondary, activePage, setActivePage }) => {
  const [state, setState] = useState({
    showPrimary: false,
    showSecondary: false,
  });

  const handlePrimaryChange = (color, e) => {
    setPrimary(color.rgb);
  };
  const handleSecondaryChange = (color, e) => {
    setSecondary(color.rgb);
  };

  return (
    <>
      <header style={{ color: primaryString }} className={css.header}>
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
            style={{ backgroundColor: primaryString }}
            onClick={() => setState({ ...state, showPrimary: !state.showPrimary })}
          >
            Color picker
          </button>
          <button
            style={{ backgroundColor: secondaryString }}
            onClick={() => setState({ ...state, showSecondary: !state.showSecondary })}
          >
            Color picker
          </button>
          {state.showPrimary && (
            <div className={css.colorPickerWrapper}>
              <ChromePicker color={primaryString} onChangeComplete={handlePrimaryChange} />
            </div>
          )}
          {state.showSecondary && (
            <div className={css.colorPickerWrapper}>
              <ChromePicker color={secondaryString} onChangeComplete={handleSecondaryChange} />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default NavBar;
