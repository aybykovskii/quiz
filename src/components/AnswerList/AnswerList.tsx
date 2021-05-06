import React, { Key } from "react";
import { IAnswer } from "src/TS";
import { Answer } from "../";
import { useStyle } from "./style";

interface IAnswerListProps {
  answers: Array<IAnswer>;
  userAnswersHandler: (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: number
  ) => void;
}

export const AnswerList: React.FC<IAnswerListProps> = ({
  answers,
  userAnswersHandler,
}) => {
  const classes = useStyle();
  return (
    <ul className={classes.answerList}>
      {answers.map((answer: IAnswer, key: Key) => {
        return (
          <Answer
            key={key}
            id={answer.id}
            userAnswersHandler={userAnswersHandler}
          >
            {answer.text}
          </Answer>
        );
      })}
    </ul>
  );
};
