import css from "./Textarea.module.scss";

const Textarea = ({ label, infoHover, placeholder, id, className, value, onChange, rows }) => {
  return (
    <div className={`${css.div} ${className}`}>
      {label && <h5>{label} :</h5>}

      <textarea id={id} placeholder={placeholder} value={value} rows={rows} onChange={onChange}></textarea>

      {infoHover && <InfoHover data={infoHover} />}
    </div>
  );
};

export default Textarea;

const InfoHover = ({ data }) => {
  return (
    <div className={css.infoHover}>
      i<span>{data}</span>
    </div>
  );
};

Textarea.defaultProps = {
  rows: 5,
};
