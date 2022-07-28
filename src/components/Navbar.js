import React, { useState } from "react";
import Menu from "./Menu";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdFitness } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // nav flex-row, space between
    //menu hidden, needs state
    <div className="flex justify-between items-center h-1/5 p-7 w-full bg-pink-50 ">
      <IoMdFitness className="text-6xl px-2  text-pink-600" />
      <h1 className="text-pink-600 text-center font-extralight max-w-xl text-5xl py-2 ">
        Fitlab
      </h1>
      <BiMenuAltRight
        className="text-6xl px-2 text-pink-600"
        onClick={handleClick}
      />
      {menuOpen ? <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : null}
    </div>
  );
};

export default Navbar;
