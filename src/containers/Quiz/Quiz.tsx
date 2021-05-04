import React, { useEffect, useState } from "react";
import { Question } from "@components/index";

export const Quiz = (props: any) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [title, setTitle] = useState(() => props.quiz[activeQuestion].title);
  const [userAnswers, setUserAnswers] = useState<React.ReactNodeArray>([]);

  const userAnswersHandler = (e: any, answerId: any) => {
    setUserAnswers([...userAnswers, answerId]);

    if (answerId === props.quiz[activeQuestion].rightAnswerId) {
      e.target.style.background = "#69B282";
    } else {
      e.target.style.background = "rgba(224, 60, 49, 0.8)";
    }

    const bgInterval: any = setInterval(() => {
      e.target.style.background = "";

      setActiveQuestion((prev) => {
        return prev + 1;
      });

      return clearInterval(bgInterval);
    }, 1500);
  };

  useEffect(() => {
    setTitle(props.quiz[activeQuestion].title);
  }, [activeQuestion]);

  return (
    <>
      <Question
        title={title}
        answers={props.quiz[activeQuestion].answers}
        userAnswersHandler={userAnswersHandler}
        activeQuestion={activeQuestion}
        questionsCount={props.quiz.length}
      />
    </>
  );
};
