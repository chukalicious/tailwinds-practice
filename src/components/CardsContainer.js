import Card from "./Card";
import { data } from "../data";

const CardContainer = () => {
  return (
    <div className="flex-col min-w-full px-10 my-12 ">
      <h2 className="text-6xl py-8 mb-6">Popular</h2>
      <div className="flex flex-col">
        {data.map((card, i) => (
          <Card cardData={card} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
