import React from "react";

import { Button } from "@components";

import { IUserAnswer } from "src/interfaces";
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
      {/*
        NOTE:
          Смотри, тут в map не нужна типизация. У тебя массив userAnswers уже типизирован, поэтому ts сам поймёт какие типы будут в map.
            userAnswers.map((answer: IUserAnswer, key: number) ...)   =>   userAnswers.map((answer, key) ...)
      */}
      {userAnswers.map((answer: IUserAnswer, key: number) => {
        /*
          NOTE:
            Тут ты наверное просто не заметил, можно так сделать:
              return ...;   =>   return <p key={key}>{key + 1}. {answer.isCorrect ? "Правильно" : "Ошибка"}</p>;
        */
        return answer.isCorrect ? <p key={key}>{key + 1}. Правильно</p> : <p key={key}>{key + 1}. Ошибка</p>;
      })}
      <div className={classes.buttonsWrapper}>
        <Button text="Повторить" onClick={onClickHandler} />
        <Button text="Список тестов" onClick={onClickHandler} />
      </div>
    </>
  );
};
