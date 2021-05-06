import React from "react";

import { Answer } from "@components";

import { IAnswer } from "@ts";
import { useStyle } from "./style";

type AnswerListProps = {
  answers: Array<IAnswer>;
  userAnswersHandler: (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: number
  ) => void;
};
export const AnswerList: React.FC<AnswerListProps> = ({
  answers,
  userAnswersHandler,
}) => {
  const classes = useStyle();
  return (
    <ul className={classes.answerList}>
      {answers.map((answer, key) => {
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
