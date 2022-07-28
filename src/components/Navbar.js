import React, { useState } from "react";
import Menu from "./Menu";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdFitness } from "react-icons/io";

const Navbar = (props) => {
  console.log("Menu: props: ", props);
  const [menuOpen, setMenuOpen] = useState(false);
  const screenSize = props.screenSize.width;
  console.log("Navbar: screenSize: ", screenSize);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {screenSize < 768 ? (
        <div className="flex justify-between items-center h-1/5 p-7 w-full bg-pink-50 ">
          <IoMdFitness className="text-6xl px-2  text-pink-600" />
          <h1 className="text-pink-600 text-center font-extralight max-w-xl text-5xl py-2 ">
            Fitlab
          </h1>
          <BiMenuAltRight
            className="text-6xl px-2 text-pink-600"
            onClick={handleClick}
          />
          {menuOpen ? (
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          ) : null}
        </div>
      ) : (
        <div className="flex justify-between align-middle h-1/5 p-6 w-full bg-pink-50 ">
          <div className="flex flex-row ">
            <IoMdFitness className="text-5xl px-2 py-2 text-pink-600" />
            <h1 className="text-pink-600 text-center font-extralight max-w-xl text-4xl py-2 px-1 ">
              Fitlab
            </h1>
          </div>
          <div className="flex flex-row text-pink-600">
            <ul className="flex">
              <li className="p-3">Home</li>
              <li className="p-3">
                <a href="#exercises">Exercises</a>
              </li>
              <li className="p-3">
                <a href="#trainers">Trainers</a>
              </li>
              <li className="p-3">About Us</li>
            </ul>
          </div>
          <div className="flex">
            <button className="flex px-3 py-4 bg-pink-600 text-white font-light rounded-xl">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
