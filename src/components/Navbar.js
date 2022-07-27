import React, { useState } from "react";
import Menu from "./Menu";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdFitness } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("Navbar: menuOpen: ", menuOpen);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // nav flex-row, space between
    //menu hidden, needs state
    <div>
      <IoMdFitness />
      <h1 className="text-pink-400 text-center font-extralight max-w-xl">
        Fitlab
      </h1>
      <BiMenuAltRight onClick={handleClick} />
      {menuOpen ? <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : null}
    </div>
  );
};

export default Navbar;
