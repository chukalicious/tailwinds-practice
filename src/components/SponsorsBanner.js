import {
  FaAtlassian,
  FaApple,
  FaAirbnb,
  FaTripadvisor,
  FaStudiovinari,
  FaSellsy,
  FaSkype,
} from "react-icons/fa";

const SponsorsBanner = () => {
  // this will be a narrow div with logos
  // maybe scrolling
  // generic icons will be enough for now
  return (
    <div className="flex justify-between my-5 px-4">
      <FaAtlassian className="text-5xl" />
      <FaAirbnb className="text-5xl" />
      <FaApple className="text-5xl" />
      <FaSellsy className="text-5xl" />
      <FaSkype className="text-5xl" />
      <FaStudiovinari className="text-5xl" />
      <FaTripadvisor className="text-5xl" />
    </div>
  );
};

export default SponsorsBanner;
