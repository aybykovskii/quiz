import React from "react";
import { useStyle } from "./style";

interface IButtonProps {
  text: String;
  color?: String;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ text, color, onClick }) => {
  const classes = useStyle();
  return (
    <button className={classes.button} onClick={onClick}>
      {text}
    </button>
  );
};
