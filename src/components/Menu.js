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
    <div className="z-30 absolute top-0 right-0 bg-stone-300 w-3/4 h-full">
      <BiX onClick={handleClose} className="text-2xl" />
      <ul>
        <li>Home</li>
        <li>
          <a href="#exercises">Exercises</a>
        </li>
        <li>
          <a href="#trainers">Trainers</a>
        </li>
        <li>About Us</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Menu;
