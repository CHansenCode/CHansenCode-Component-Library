import css from "./Card.module.scss";

const Card = ({
  primaryColor,
  secondaryColor,
  border,
  textPadding,
  boxShadow,
  width,
  height,
  title,
  body,
  imgUrl,
  date,
}) => {
  const propStyle = {
    border: border,
    boxShadow: boxShadow,
    width: width,
  };
  return (
    <article className={css.card_container} style={propStyle}>
      <figure style={{ margin: "0" }} className={css.img_container}>
        <img style={{ width: "100%" }} src={imgUrl} />
      </figure>

      <div style={{ padding: textPadding ? textPadding : "1rem", color: primaryColor }}>
        <h3 style={{ color: secondaryColor }}>{title}</h3>
        <p>{body}</p>
        <time style={{ color: secondaryColor }}>{date}</time>
      </div>
    </article>
  );
};

export default Card;

Card.defaultProps = {
  boxShadow: "0 0 3rem -1.5rem currentColor",
  border: "thin solid currentColor",
  //dummy data
  title: "Title example",
  body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus unde autem, optio nam soluta.",
  imgUrl: "https://media.chansen.design/placeholder.jpg",
  date: "2000-01-01 12:00",
};
