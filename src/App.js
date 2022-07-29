import React, { useEffect, useState } from "react";
import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import Trainers from "./components/Trainers";
import SponsorsBanner from "./components/SponsorsBanner";
import CardContainer from "./components/CardsContainer";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [detectSize, setDetectSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  console.log("detectSize: ", detectSize);

  const getSize = () => {
    setDetectSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", getSize);
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, [detectSize]);

  return (
    <div>
      <Navbar screenSize={detectSize} />
      <HeroComponent />
      <SponsorsBanner />
      <Exercises />
      <Trainers />
      <CardContainer />
      <About />
      <Footer />
    </div>
  );
}

export default App;
