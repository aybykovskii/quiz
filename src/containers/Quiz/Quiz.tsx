import React, { SetStateAction, useEffect, useState } from "react";
import { Question } from "@components/index";
import { IQuestion } from "src/interfaces";
import { useStyle } from "./style";

interface IQuizProps {
  quiz: Array<IQuestion>;
  isFinished: Boolean;
  setIsFinished: Function;
}

export const Quiz: React.FC<IQuizProps> = ({
  quiz,
  isFinished,
  setIsFinished,
}) => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [title, setTitle] = useState(() => quiz[activeQuestion].title);
  const [userAnswers, setUserAnswers] = useState<Number[]>([]);

  const classes = useStyle();

  const userAnswersHandler = (
    event: React.MouseEvent<HTMLUListElement>,
    answerId: Number
  ) => {
    setUserAnswers((prev) => [...prev, answerId]);

    const target = event.currentTarget;

    answerId === quiz[activeQuestion].rightAnswerId
      ? target.classList.add(classes.success)
      : target.classList.add(classes.error);

    const bgInterval: any = setInterval(() => {
      target.classList.remove(classes.success, classes.error);

      quiz[activeQuestion + 1]
        ? setActiveQuestion((prev) => prev + 1)
        : setIsFinished(true);

      return clearInterval(bgInterval);
    }, 500);
  };

  useEffect(() => {
    setTitle(quiz[activeQuestion].title);
  }, [activeQuestion]);

  return (
    <>
      <Question
        title={title}
        answers={quiz[activeQuestion].answers}
        userAnswersHandler={userAnswersHandler}
        activeQuestion={activeQuestion}
        questionsCount={quiz.length}
      />
    </>
  );
};
