import React from "react";
import { useStyle } from "./style";

export const Answer = (props: any) => {
  const classes = useStyle();
  return (
    <li
      className={classes.answerItem}
      id={props.id}
      onClick={(e) => props.userAnswersHandler(e, props.id)}
    >
      {props.text}
    </li>
  );
};
