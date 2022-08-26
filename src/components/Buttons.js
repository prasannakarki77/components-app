import React from "react";
import Button from "./Button";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import { MdWarning } from "react-icons/md";
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
      <Button color="danger" startIcon={BsFillCartCheckFill} />
      <Button endIcon={BsFillCartCheckFill} />
      <Button color="primary" endIcon={AiFillEdit} />
      <Button color="secondary" endIcon={FaUserCog} />
      <Button color="danger" endIcon={MdWarning} />
    </div>
  );
};

export default Buttons;
