import React from "react";
import { AnswerList } from "../";
import { useStyle } from "./style";

export const Question = (props: any) => {
  const classes = useStyle();

  return (
    <div className={classes.body}>
      <div className={classes.wrapper}>
        <div className={classes.subtitle}>
          <h3>Вопрос №{props.activeQuestion + 1}</h3>
          <small>
            {props.activeQuestion + 1} из {props.questionsCount}
          </small>
        </div>
        <h1 className={classes.title}>{props.title}</h1>
        <hr className={classes["wrapper > hr"]} />
        <AnswerList
          answers={props.answers}
          userAnswersHandler={props.userAnswersHandler}
        />
      </div>
    </div>
  );
};
