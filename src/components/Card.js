const Card = (props) => {
  const { cardData } = props;
  return (
    <div className="mb-16 bg-pink-50 rounded-3xl pb-8 ">
      <img className="w-full rounded-3xl" src={cardData.url} alt="exercises" />
      <div className="p-1 ml-3">
        <h3 className="text-4xl font-medium">{cardData.header}</h3>
        <p className="text-pink-900 p-2.5 text-2xl">{cardData.subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
