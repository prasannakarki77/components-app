import React, { useEffect, useState } from "react";
import "../styles/button.scss";
const Button = (props) => {
  const [label, setLabel] = useState("Default");
  const [variant, setVariant] = useState("");
  const [disabled, setDisabled] = useState("");
  const [disableShadow, setdisableShadow] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("default");
  useEffect(() => {
    if (props.label !== undefined) {
      setLabel(props.label);
    }
    if (props.variant !== undefined) {
      setVariant(props.variant);
    }
    if (props.disabled) {
      setDisabled("disabled");
    }
    if (props.disableShadow) {
      setdisableShadow("disableShadow");
    }
    if (props.size !== undefined) {
      setSize(props.size);
    }
    if (props.color !== undefined) {
      setColor(props.color);
    }
  }, []);
  return (
    <div className="button-container">
      <h1>{props.disabled}</h1>
      <p>{`<Button ${
        props.variant !== undefined ? `variant="${props.variant}"` : ""
      }  ${props.size !== undefined ? `size="${props.size}"` : ""}  ${
        props.color !== undefined ? `color="${props.color}"` : ""
      } ${props.disabled ? "disabled" : ""} ${
        props.disableShadow ? "disableShadow" : ""
      }/>`}</p>
      <button
        className={`button button__${variant} button__size--${size} button__color--${color} button__state--${disabled} button__state--${disableShadow}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
