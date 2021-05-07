import React from "react";
import { useStyle } from "./style";

type InputProps = {
  id: string;
  type: string;
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({ id, type, placeholder }) => {
  const classes = useStyle();
  return (
    <input
      className={classes.input}
      id={id}
      type={type}
      placeholder={placeholder}
    />
  );
};
