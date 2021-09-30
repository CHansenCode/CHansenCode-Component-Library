import css from "./ContactForm.module.scss";

const IsValidToggle = ({ truthy }) => {
  return <div className={`${truthy ? "success" : "error"} ${css.isValidToggle}`}>{truthy ? "v" : "x"}</div>;
};

export default IsValidToggle;
