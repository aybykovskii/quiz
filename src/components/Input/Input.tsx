import React from "react";
import { useStyle } from "./style";

type InputProps = {
  label: string;
  value: string;
  type?: string;
  isValid: boolean;
  shouldValidate: boolean;
  errorMessage: string;
  touched: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  label,
  value,
  type = "text",
  isValid,
  shouldValidate,
  errorMessage,
  touched,
  onChange,
}) => {
  const isInvalid = (
    isValid: boolean,
    shouldValidate: boolean,
    touched: boolean
  ) => {
    return !isValid && shouldValidate && touched;
  };

  const classes = useStyle();
  const styles = [classes.label];

  if (isInvalid(isValid, shouldValidate, touched)) {
    styles.push(classes.invalid);
  }

  const id = type + Math.random().toString();
  return (
    <div className={classes.Input}>
      <label className={styles.join(" ")} htmlFor={id}>
        {label}
      </label>
      <input
        className={classes.input}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
      {isInvalid(isValid, shouldValidate, touched) ? (
        <span className={classes.span}>
          {errorMessage ? errorMessage : "Заполните это поле"}
        </span>
      ) : null}
    </div>
  );
};
