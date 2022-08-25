import React from "react";
import Button from "./Button";
import "../styles/button.scss";
const Buttons = () => {
  return (
    <div className="buttons-container">
      <Button />
      <Button variant="outline" />
      <Button variant="text" />
      <Button disableShadow />
      <Button variant="text" disabled />
      <Button size="lg" color="primary" />
      <Button size="md" color="primary" />
      <Button size="sm" color="primary" />
      <Button color="secondary" />
      <Button color="danger" />
    </div>
  );
};

export default Buttons;
