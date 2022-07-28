import Card from "./Card";
import { data } from "../data";

const CardContainer = () => {
  return (
    <div className="flex-col min-w-full ">
      <h2>Popular</h2>
      <div className="flex flex-col">
        {data.map((card, i) => (
          <Card cardData={card} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
