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
    <div className="flex justify-between items-center ">
      <IoMdFitness className="text-5xl px-2" />
      <h1 className="text-pink-400 text-center font-extralight max-w-xl text-5xl py-2 ">
        Fitlab
      </h1>
      <BiMenuAltRight className="text-5xl px-2" onClick={handleClick} />
      {menuOpen ? <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : null}
    </div>
  );
};

export default Navbar;
