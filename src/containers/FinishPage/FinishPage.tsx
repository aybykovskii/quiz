import React from "react";

import { Button } from "@components";

import { IUserAnswer } from "src/TS";
import { useStyle } from "./style";

interface IFinishPageProps {
  userAnswers: Array<IUserAnswer>;
}

export const FinishPage: React.FC<IFinishPageProps> = ({ userAnswers }) => {
  const classes = useStyle();

  const onClickHandler = () => {
    console.log("button clicked");
  };

  return (
    <>
      <h1>Тест пройден</h1>
      <h3>Ваши ответы:</h3>

      {userAnswers.map((answer, key) => {
        return answer.isCorrect ? (
          <p key={key}>{key + 1}. Правильно</p>
        ) : (
          <p key={key}>{key + 1}. Ошибка</p>
        );
      })}
      <div className={classes.buttonsWrapper}>
        <Button onClick={onClickHandler}>Повторить</Button>
        <Button onClick={onClickHandler}>Список тестов</Button>
      </div>
    </>
  );
};
