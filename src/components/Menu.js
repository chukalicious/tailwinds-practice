import React, { useState } from "react";
import { BiX } from "react-icons/bi";
const Menu = (props) => {
  // give the component local state to handle the button to close

  console.log("Menu.js: props", props);
  const [menuState] = useState(props.menuOpen);

  console.log("menuState:", menuState);

  const handleClose = () => {
    props.setMenuOpen(!menuState);
  };

  console.log("Menu.js: handleClose: ", menuState);
  return (
    // make very wide in the vw
    // put the icon on the opposite side of the <li>s
    <div>
      <BiX onClick={handleClose} />
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
