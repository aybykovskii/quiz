import React, { ButtonHTMLAttributes } from "react";
import { useStyle } from "./style";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  onClick,
}) => {
  const classes = useStyle();
  return (
    <button
      type={type}
      className={classes.button}
      onClick={(event) => onClick(event)}
    >
      {children}
    </button>
  );
};
