import React from "react";
import { Answer } from "../";
import { useStyle } from "./style";

export const AnswerList = (props: any) => {
  const classes = useStyle();
  return (
    <ul className={classes.answerList}>
      {props.answers.map((answer: any, key: any) => {
        return (
          <Answer
            key={key}
            id={answer.id}
            text={answer.text}
            userAnswersHandler={props.userAnswersHandler}
          />
        );
      })}
    </ul>
  );
};
