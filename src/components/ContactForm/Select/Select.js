import css from "./Select.module.scss";

const Select = ({ text, onClick, truthy }) => {
  return (
    <button className={`${truthy ? css.active : null}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Select;
