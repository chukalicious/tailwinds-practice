import Card from "./Card";
import { images } from "../data";

const CardContainer = () => {
  const urls = images;

  console.log("urls", urls);
  return (
    <div>
      {urls.map((img) => (
        <Card url={img} />
      ))}
    </div>
  );
};

export default CardContainer;
