import React from "react";
import { useStyle } from "./style";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  disabled,
  onClick,
}) => {
  const classes = useStyle();
  return (
    <button
      type={type}
      className={classes.button}
      disabled={disabled}
      onClick={(event) => onClick(event)}
    >
      {children}
    </button>
  );
};
