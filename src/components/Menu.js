import React, { useState } from "react";
import { BiX } from "react-icons/bi";
const Menu = (props) => {
  // give the component local state to handle the button to close

  const [menuState] = useState(props.menuOpen);

  const handleClose = () => {
    props.setMenuOpen(!menuState);
  };

  return (
    // make very wide in the vw
    // put the icon on the opposite side of the <li>s
    <div className="z-30 absolute top-0 right-0 bg-pink-600 text-white w-full h-full flex flex-col">
      <div className="flex w-full justify-end">
        <BiX onClick={handleClose} className="text-6xl flex" />
      </div>
      <ul className="w-full h-">
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
