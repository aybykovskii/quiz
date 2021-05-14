import React from "react";
import { useStyle } from "./style";

type Option = {
  text: number;
  value: number;
};

type SelectProps = {
  label: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
};

export const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  const classes = useStyle();
  const htmlFor = `${label}-${Math.random()}`;

  return (
    <div className={classes.Select}>
      <label className={classes.label} htmlFor={htmlFor}>
        {label}
      </label>
      <select
        className={classes.select}
        id={htmlFor}
        value={value}
        onChange={(event) => onChange(event)}
      >
        {options.map((option, index) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
