const Card = (props) => {
  console.log("Card: props.url: ", props);
  const { cardData } = props;
  return (
    <div className="p-4">
      <img className="w-full" src={cardData.url} alt="exercises" />
      <h3>{cardData.header}</h3>
      <p>{cardData.subtitle}</p>
    </div>
  );
};

export default Card;
