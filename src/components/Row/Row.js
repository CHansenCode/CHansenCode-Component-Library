import css from "./Row.module.scss";

const Row = ({ gap, children, width }) => {
  let count = children.length;

  const propStyles = {
    width: width,
    display: "grid",
    gridTemplateColumns: `repeat(${count}, 1fr)`,
    gridGap: gap ? gap : "2rem",
    margin: "0 auto",
  };
  return (
    <div className={css.wrapper} style={propStyles}>
      {children}
    </div>
  );
};

export default Row;
