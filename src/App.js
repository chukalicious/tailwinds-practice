import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import Trainers from "./components/Trainers";
import SponsorsBanner from "./components/SponsorsBanner";

function App() {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <SponsorsBanner />
      <Exercises />
      <Trainers />
    </div>
  );
}

export default App;
