import React from "react";
import { useStyle } from "./style";

type InputProps = {
  labelText: string;
  id?: string | number;
  type?: string;
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  labelText,
  id,
  type,
  value,
  onClick,
  onChange,
}) => {
  const classes = useStyle();

  return (
    <div>
      <label htmlFor={typeof id == "number" ? id.toString() : id}>
        {labelText}
      </label>
      <input
        className={classes.input}
        id={typeof id == "number" ? id.toString() : id}
        type={type ? type : "text"}
        value={value}
        placeholder="Заполните поле"
        onClick={onClick}
        onChange={onChange}
      />
    </div>
  );
};
