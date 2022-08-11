import React from "react";
import Button from "./Button";
import "../styles/button.scss";
const Buttons = () => {
  return (
    <div className="buttons-container">
      <Button label="Button1" />
      <Button label="Button2" />
      <Button />
    </div>
  );
};

export default Buttons;
