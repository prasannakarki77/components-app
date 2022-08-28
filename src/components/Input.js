import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { css } from "styled-components";
const Input = ({
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullwidth,
  multiline,
  row,
  placeholder,
  label,
}) => {
  const defaultPlaceHolder = "Placeholder";
  const defaultLabel = "Label";
  let StartIcon = startIcon;
  let EndIcon = endIcon;
  useEffect(() => {
    console.log("icon");
    console.log(startIcon);
  }, []);
  return (
    <InputContainer error={error} multiline={multiline} fullwidth={fullwidth}>
      {multiline ? (
        <TextAreaField
          placeholder={placeholder ? placeholder : defaultPlaceHolder}
          fullwidth={fullwidth}
          defaultValue={value ? value : ""}
          error={error}
          disabled={disabled}
          id={InputField}
          helperText={helperText}
          StartIcon={startIcon}
          endIcon={endIcon}
          size={size}
          rows={row}
        />
      ) : (
        <InputField
          placeholder={placeholder ? placeholder : defaultPlaceHolder}
          fullwidth={fullwidth}
          defaultValue={value ? value : ""}
          error={error}
          disabled={disabled}
          id={InputField}
          helperText={helperText}
          startIcon={startIcon}
          endIcon={endIcon}
          size={size}
        />
      )}
      {startIcon && <StartIcon className="start-icon icon" />}{" "}
      {endIcon && <EndIcon className="end-icon icon" />}
      <label htmlFor={InputField}>{label ? label : defaultLabel}</label>
      <p>{helperText ? helperText : ""}</p>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  padding: 20px 10px;
  display: inline-block;
  width: ${({ fullwidth }) => fullwidth && "100%"};
  .icon {
    font-size: 25px;
    position: absolute;
  }
  .start-icon {
    left: 20px;
    top: 35px;
  }
  .end-icon {
    right: 20px;
    top: 35px;
  }
  label {
    position: absolute;
    top: 0;
    left: 10px;
    margin-bottom: 4px;
    font-size: 12px;
    color: ${({ error }) =>
      (!error && " #333333") || (error && "rgba(211, 47, 47, 1)")};
  }
  &:hover,
  &:hover > input,
  &:hover > textarea,
  &:hover > label {
    cursor: ${({ disabled }) => disabled && "not-allowed"};
  }

  &:hover > input,
  &:hover > textarea {
    border-color: ${({ error }) =>
      (!error && "#000") || (error && "rgba(211, 47, 47, 1)")};
  }
  &:hover > label {
    color: ${({ error }) =>
      (!error && "#000") || (error && "rgba(211, 47, 47, 1)")};
  }
  p {
    color: ${({ error }) =>
      (!error && "#828282") || (error && "rgba(211, 47, 47, 1)")};
    font-size: 10px;
  }
  .icon {
    color: rgba(130, 130, 130, 1);
  }
`;

const TextAreaField = styled.textarea`
  padding: ${({ size }) =>
    (!size && "18px 12px") ||
    (size === "sm" && "10px 12px") ||
    (size === "md" && "18px 12px")};

  border-radius: 8px;
  resize: none;
  outline: none;
  border: ${({ disabled, error }) =>
    (error && "1px solid rgba(211, 47, 47, 1)") ||
    (!disabled && !error && "1px solid rgba(130, 130, 130, 1)") ||
    (disabled && "none")};
  color: #000 !important;
  font-size: 14px;
  font-weight: 500;
  width: ${({ fullwidth }) => fullwidth && "100%"};

  &::placeholder {
    color: #828282 !important;
  }
  &:focus,
  &:focus ~ label {
    border-color: ${({ error }) =>
      (!error && "rgba(41, 98, 255, 1)") || (error && "rgba(211, 47, 47, 1)")};
    color: ${({ error }) =>
      (!error && "rgba(41, 98, 255, 1)") || (error && "rgba(211, 47, 47, 1)")};
  }
`;

const InputField = styled.input`
  padding: ${({ size }) =>
    (!size && "18px 12px") ||
    (size === "sm" && "10px 12px") ||
    (size === "md" && "18px 12px")};
  padding-left: ${({ startIcon }) => startIcon && "40px"};
  padding-right: ${({ endIcon }) => endIcon && "40px"};
  border-radius: 8px;
  outline: none;
  border: ${({ disabled, error }) =>
    (error && "1px solid rgba(211, 47, 47, 1)") ||
    (!disabled && !error && "1px solid rgba(130, 130, 130, 1)") ||
    (disabled && "none")};
  color: #000 !important;
  font-size: 14px;
  font-weight: 500;
  width: ${({ fullwidth }) => fullwidth && "100%"};

  &::placeholder {
    color: #828282 !important;
  }
  &:focus,
  &:focus ~ label {
    border-color: ${({ error }) =>
      (!error && "rgba(41, 98, 255, 1)") || (error && "rgba(211, 47, 47, 1)")};
    color: ${({ error }) =>
      (!error && "rgba(41, 98, 255, 1)") || (error && "rgba(211, 47, 47, 1)")};
  }
`;

export default Input;
