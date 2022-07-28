import React, { useState } from "react";
import { BiX } from "react-icons/bi";
const Menu = (props) => {
  // give the component local state to handle the button to close
  const [menuState] = useState(props.menuOpen);

  const handleClose = () => {
    props.setMenuOpen(!menuState);
  };

  return (
    <div className="z-30 absolute top-0 right-0 bg-pink-50 text-pink-600 w-full h-full flex flex-col">
      <div onClick={handleClose} className="flex w-full justify-end">
        <BiX className="text-6xl flex" />
      </div>
      <ul onClick={handleClose} className="w-full h-">
        <li className="text-4xl p-3 text-center my-4">Home</li>
        <li className="text-4xl p-3 text-center my-4">
          <a href="#exercises">Exercises</a>
        </li>
        <li className="text-4xl p-3 text-center my-4">
          <a href="#trainers">Trainers</a>
        </li>
        <li className="text-4xl p-3 text-center my-4">About Us</li>
        <li className="text-4xl p-3 text-center my-4">Login</li>
      </ul>
    </div>
  );
};

export default Menu;
