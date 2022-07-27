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
    <div>
      <FaAtlassian />
      <FaAirbnb />
      <FaApple />
      <FaSellsy />
      <FaSkype />
      <FaStudiovinari />
      <FaTripadvisor />
    </div>
  );
};

export default SponsorsBanner;
