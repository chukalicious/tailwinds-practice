import Card from "./Card";
import { data } from "../data";

const CardContainer = () => {
  return (
    <div className="flex-col min-w-full px-10 my-12 mb:mx-12 ">
      <h3 className="flex mt-8 ml-15 text-6xl p-4 max-w-fit md:ml-19 md:text-5xl md:font-thin md:p-7 md:">
        Popular
      </h3>
      <div className="flex flex-col md:flex-row md flex-wrap min-w-full md:justify-evenly md:grid md:grid-cols-3 md:grid-flow-row md:gap-x-20">
        {data.map((card, i) => (
          <Card cardData={card} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
