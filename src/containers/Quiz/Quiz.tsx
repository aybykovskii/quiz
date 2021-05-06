import React, { useEffect, useState } from "react";

import { FinishPage } from "@containers/FinishPage/FinishPage";
import { Question } from "@components/index";

import { IQuestion, IUserAnswer } from "src/TS";
import { useStyle } from "./style";

type QuizProps = {
  quiz: Array<IQuestion>;
};

export const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<IUserAnswer[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const classes = useStyle();

  const userAnswersHandler = (
    event: React.MouseEvent<HTMLLIElement>,
    answerId: number
  ) => {
    setUserAnswers((prev: IUserAnswer[]) => [
      ...prev,
      {
        userAnswer: answerId,
        isCorrect: quiz[activeQuestion].rightAnswerId == answerId,
      },
    ]);

    const target = event.currentTarget;

    if (answerId === quiz[activeQuestion].rightAnswerId) {
      target.classList.add(classes.success);
    } else {
      target.classList.add(classes.error);
    }

    const bgTimeout = (setTimeout(() => {
      target.classList.remove(classes.success, classes.error);

      if (quiz[activeQuestion + 1]) {
        setActiveQuestion((prev) => prev + 1);
      } else {
        setIsFinished(true);
      }
    }, 500) as any) as number;
  };

  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        {isFinished ? (
          <FinishPage userAnswers={userAnswers} />
        ) : (
          <Question
            title={quiz[activeQuestion].title}
            answers={quiz[activeQuestion].answers}
            userAnswersHandler={userAnswersHandler}
            activeQuestion={activeQuestion}
            questionsCount={quiz.length}
          />
        )}
      </div>
    </div>
  );
};
