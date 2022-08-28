import React from "react";
import Input from "./Input";
import "../styles/input.scss";
import { BsFillCartCheckFill, BsFillPersonCheckFill } from "react-icons/bs";

const Inputs = () => {
  return (
    <div className="inputs-container">
      <p className="component-structure">{"    <Input />"} </p>
      <Input />
      <br />
      <p className="component-structure">{"    <Input error />"} </p>
      <Input error />
      <br />
      <p className="component-structure">
        {'    <Input error helperText = "Some Interesting text" />'}{" "}
      </p>
      <Input error helperText={"Some Interesting text"} />
      <br />
      <p className="component-structure">{"    <Input disabled />"} </p>
      <Input disabled />
      <br />
      <p className="component-structure">{'    <Input value = "text />'} </p>
      <Input value="text" />
      <br />
      <p className="component-structure">{'    <Input size = "sm" />'} </p>
      <Input size="sm" />

      <br />
      <p className="component-structure">
        {'    <Input startIcon = "BsFillCartCheckFill" />'}{" "}
      </p>
      <Input startIcon={BsFillCartCheckFill} />
      <br />
      <p className="component-structure">
        {'    <Input startIcon = "BsFillPersonCheckFill" />'}{" "}
      </p>
      <Input endIcon={BsFillPersonCheckFill} />
      <br />
      <p className="component-structure">{"    <Input fullwidth />"} </p>
      <Input fullwidth />
      <br />
      <p className="component-structure">
        {'    <Input multiline row = "4" />'}{" "}
      </p>
      <Input multiline row="4" />
    </div>
  );
};

export default Inputs;
