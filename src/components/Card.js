const Card = (props) => {
  console.log("Card: props.url: ", props.url);
  return (
    <div>
      <img src={props.url} alt="exercises" />
    </div>
  );
};

export default Card;
