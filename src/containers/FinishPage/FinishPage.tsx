import React from "react";

import { Button } from "@components";

import { IUserAnswer } from "@ts";
import { useStyle } from "./style";

type FinishPageProps = {
  userAnswers: Array<IUserAnswer>;
  testRepeatHandler: () => void;
};
export const FinishPage: React.FC<FinishPageProps> = ({
  userAnswers,
  testRepeatHandler,
}) => {
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
        <Button onClick={testRepeatHandler}>Повторить</Button>
        <Button onClick={onClickHandler}>Список тестов</Button>
      </div>
    </>
  );
};
