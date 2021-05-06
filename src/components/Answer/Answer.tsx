import React from "react";
import { useStyle } from "./style";

/*
  NOTE:
    Здесь, видимо, ты тоже не понял, как типизировать пропсы
    Вот так:
      {
        id: bumber;
        text: string; (где-то уже писал, что лучше это заменить на проп children)
        userAnswersHandler: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: number)
      }
*/
export const Answer = (props: any) => {
  const classes = useStyle();
  return (
    <li className={classes.answerItem} id={props.id} onClick={(e) => props.userAnswersHandler(e, props.id)}>
      {props.text}
    </li>
  );
};
