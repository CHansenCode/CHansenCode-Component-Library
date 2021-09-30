import { useState } from "react";

import css from "./Textarea.module.scss";

import { AiOutlineCheck } from "react-icons/ai";

const Textarea = ({ label, placeholder, truthy, required, infoHover, id, className, value, onChange, rows }) => {
  const [isFocused, setIsFocused] = useState(false);

  function onFocus() {
    setIsFocused(true);
  }
  function onBlur() {
    setIsFocused(false);
  }
  return (
    <div className={`${css.div} ${className} ${truthy && css.valid}`}>
      <header className={css.header}>
        {label && <h5 className={css.label}>{label} :</h5>}
        {required && <h6 className={css.required}>* req.</h6>}
        {infoHover && <InfoHover isFocused={isFocused} data={infoHover} />}
      </header>

      <div className={css.inputWrapper}>
        <textarea
          id={id}
          placeholder={placeholder}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          value={value}
          rows={rows}
          onChange={onChange}
        ></textarea>
        <div className={css.checkmark}>
          <AiOutlineCheck />
        </div>
      </div>
    </div>
  );
};

export default Textarea;

const InfoHover = ({ data, isFocused }) => {
  return (
    <div className={`${css.infoHover} ${isFocused && css.inputIsFocused}`}>
      <h6 className={css.infoIcon}>i</h6>
      <h5 className={css.infoText}>
        <span>{data}</span>
      </h5>
    </div>
  );
};

Textarea.defaultProps = {
  rows: 5,
};
