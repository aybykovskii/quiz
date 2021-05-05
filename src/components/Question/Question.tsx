import React from "react";
import { IAnswer } from "src/interfaces";
import { AnswerList } from "../";
import { useStyle } from "./style";

interface IQuestionProps {
  title: String;
  answers: Array<IAnswer>;
  activeQuestion: number;
  questionsCount: Number;
  userAnswersHandler: Function;
}

export const Question: React.FC<IQuestionProps> = ({
  title,
  activeQuestion,
  questionsCount,
  userAnswersHandler,
  answers,
}) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.subtitle}>
        <h3>Вопрос №{activeQuestion + 1}</h3>
        <small>
          {activeQuestion + 1} из {questionsCount}
        </small>
      </div>
      <h1 className={classes.title}>{title}</h1>
      <hr className={classes.hr} />
      <AnswerList answers={answers} userAnswersHandler={userAnswersHandler} />
    </>
  );
};
