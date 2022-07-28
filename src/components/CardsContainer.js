import Card from "./Card";
import { data } from "../data";

const CardContainer = () => {
  return (
    <div className="flex-col min-w-full px-10 my-12 mb:mx-12 ">
      <h2 className="text-6xl py-8 mb-6 md:font-extralight">Popular</h2>
      <div className="flex flex-col md:flex-row md flex-wrap min-w-full md:justify-evenly md:grid md:grid-cols-3 md:grid-flow-row md:gap-x-20">
        {data.map((card, i) => (
          <Card cardData={card} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
