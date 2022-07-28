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
    <div className="flex justify-between px-3 pt-7 pb-10 bg-pink-50">
      <FaAtlassian className="text-4xl text-pink-600" />
      <FaAirbnb className="text-4xl text-pink-600" />
      <FaApple className="text-4xl text-pink-600" />
      <FaSellsy className="text-4xl text-pink-600" />
      <FaSkype className="text-4xl text-pink-600" />
      <FaStudiovinari className="text-4xl text-pink-600" />
      <FaTripadvisor className="text-4xl text-pink-600" />
    </div>
  );
};

export default SponsorsBanner;
