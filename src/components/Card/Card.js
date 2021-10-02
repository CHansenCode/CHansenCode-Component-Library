const Card = ({ border, padding, boxShadow, width, title, body, imgUrl, date }) => {
  const propStyle = {
    border: border,
    boxShadow: boxShadow,
    width: width,
    padding: padding,
  };
  return (
    <div style={propStyle}>
      <img src={imgUrl} />
      <h4>{title}</h4>
      <p>{body}</p>
      <h6>{date}</h6>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  boxShadow: "0 0 3rem -1rem currentColor",
  width: "33%",
  padding: "1.5rem",
  //dummy data
  title: "Title example",
  body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus unde autem, optio nam soluta.",
  imgURl: "https://media.chansen.design/placeholder.jpg",
  date: "2000-01-01 12:00",
};
