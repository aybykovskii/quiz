import React from "react";
import { useStyle } from "./style";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};
export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const classes = useStyle();
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};
