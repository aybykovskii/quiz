import React from "react";
import { useStyle } from "./style";

/*
  NOTE:
    Смотри, передавать проп text, как текст кнопки - не совсем удобно.
    Можно сделать красивее:
      Ты можешь передать, как проп children: React.ReactNode;
      Тогда ты можешь передать этот проп удобнее - <Button>(а здесь всё, что захочешь, например, текст или даже <div></div>)</Button>
*/
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
