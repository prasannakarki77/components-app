import React, { useEffect, useState } from "react";
import "../styles/button.scss";
const Button = (props) => {
  const [label, setLabel] = useState("default");

  useEffect(() => {
    if (props.label !== undefined) {
      setLabel(props.label);
    }
  }, []);
  return (
    <div className="button-container">
      <button
        className={`button button__${props.variant} button__state--${props.state}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
