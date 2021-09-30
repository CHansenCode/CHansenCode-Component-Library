const Button = ({ text, children, width, height, padding, onClick, border, boxShadow, bgc, color }) => {
  const inline = {
    height: height,
    width: width,
    padding: padding,
    cursor: "pointer",
    border: border,
    color: color,
    boxShadow: boxShadow,
    backgroundColor: "transparent",
  };

  const onMouseEnter = () => {};
  const onMouseLeave = () => {};

  return (
    <button style={inline} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {text}
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  height: "auto",
  width: "auto",
  padding: "1rem 1rem",
  border: "thin solid currentColor",
  boxShadow: "none",
  backgroundColor: "transparent",
  color: "currentColor",
  boxShadow: "none",
};

const openStyle = () => {
  return (openStyle = {
    height: "2rem",
  });
};
