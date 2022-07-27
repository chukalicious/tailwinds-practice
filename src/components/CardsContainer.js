import Card from "./Card";
import { images } from "../data";

const CardContainer = () => {
  const urls = images;

  return (
    <div>
      {urls.map((img, i) => (
        <Card url={img} key={i} />
      ))}
    </div>
  );
};

export default CardContainer;
