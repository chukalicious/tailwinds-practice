import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import Trainers from "./components/Trainers";
import SponsorsBanner from "./components/SponsorsBanner";
import CardContainer from "./components/CardsContainer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <SponsorsBanner />
      <Exercises />
      <Trainers />
      <CardContainer />
    </div>
  );
}

export default App;
