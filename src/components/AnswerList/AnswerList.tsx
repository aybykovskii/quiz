import React from "react";
import { IAnswer } from "src/interfaces";
import { Answer } from "../";
import { useStyle } from "./style";

interface IAnswerListProps {
  answers: Array<IAnswer>;
  userAnswersHandler: Function;
}

export const AnswerList: React.FC<IAnswerListProps> = ({
  answers,
  userAnswersHandler,
}) => {
  const classes = useStyle();
  return (
    <ul className={classes.answerList}>
      {answers.map((answer: IAnswer, key: Number) => {
        return (
          <Answer
            key={key}
            id={answer.id}
            text={answer.text}
            userAnswersHandler={userAnswersHandler}
          />
        );
      })}
    </ul>
  );
};
