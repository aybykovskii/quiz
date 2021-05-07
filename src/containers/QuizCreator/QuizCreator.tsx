import { Button, Input } from "@components";
import { useStyle } from "@containers/QuizCreator/style";
import React, { useState } from "react";

interface IAnswerCreator {
  questionNumber: number;
}

export const QuizCreator: React.FC = () => {
  const classes = useStyle();
  const [questionNumber, setQuestionNumber] = useState<number>(2);
  const [answers, setAnswers] = useState<IAnswerCreator[]>([
    {
      questionNumber: 1,
    },
  ]);

  const onclickHandler = () => {
    console.log("button clicked");
  };

  const addAnswerHandler = () => {
    setQuestionNumber((prev) => prev + 1);
    setAnswers((prev) => [
      ...prev,
      {
        questionNumber: questionNumber,
      },
    ]);
  };
  return (
    <div className={classes.page}>
      <div className={classes.wrapper}>
        <h1>Заполните все поля</h1>
        <label htmlFor={"title"}>Введите вопрос</label>
        <Input id="title" type="text" placeholder="Текст вопроса" />
        <hr />

        {answers.map((element, index) => {
          return (
            <div key={index}>
              <label htmlFor={`question_${element.questionNumber}`}>
                Ответ №{element.questionNumber}
              </label>
              <Input
                id={`question_${element.questionNumber}`}
                type="text"
                placeholder="Введите ответ"
              />
            </div>
          );
        })}

        <Button onClick={addAnswerHandler}>Добавить вариант</Button>
        <hr />
        <Button onClick={onclickHandler}>Добавить вопрос</Button>
        <Button onClick={onclickHandler}>Отправить тест</Button>
      </div>
    </div>
  );
};
