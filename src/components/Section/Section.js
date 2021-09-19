import SectionTitle from "./SectionTitle";

const Section = ({ myRef, title, id, minHeight, maxWidth, paddingBottom, fullWidth, center, column, children }) => {
  const propStyles = {
    maxWidth: fullWidth ? "100%" : maxWidth,
    minHeight: minHeight,
    paddingBottom: paddingBottom,
    display: center && "flex",
    alignItems: center && "center",
    justifyContent: center && "center",
    flexDirection: column && "column",
  };
  return (
    <>
      {title && <SectionTitle title={title} />}
      <section ref={myRef} id={id} style={propStyles}>
        {children}
      </section>
    </>
  );
};

Section.defaultProps = {
  paddingBottom: "8vw",
};

export default Section;
