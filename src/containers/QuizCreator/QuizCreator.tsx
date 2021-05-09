import React, { useState } from "react";
import { Button, Input } from "@components";
import { useStyle } from "@containers/QuizCreator/style";
import { IQuestion, IAnswer } from "@ts";

export const QuizCreator: React.FC = () => {
  const classes = useStyle();
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [quiz, setQuiz] = useState<IQuestion[]>([]);
  const [state, setState] = useState<IQuestion>({
    title: "",
    answers: [
      { text: "", id: 1 },
      { text: "", id: 2 },
      { text: "", id: 3 },
      { text: "", id: 4 },
    ],
    rightAnswerId: 1,
  });
  const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((previous) => ({
      ...previous,
      title: event.target.value,
    }));
  };

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      answers: [
        ...prev.answers,
        (prev.answers[+event.target.id].text = event.target.value),
      ].slice(0, 4),
    }));
  };

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setQuiz((prev) => [...prev, state]);
    setState({
      title: "",
      answers: [
        { text: "", id: 1 },
        { text: "", id: 2 },
        { text: "", id: 3 },
        { text: "", id: 4 },
      ],
      rightAnswerId: 1,
    });
  };

  const onSubmitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(state);
    console.log(quiz);
  };

  return (
    <div className={classes.page}>
      <form className={classes.wrapper}>
        <h1>Заполните все поля</h1>
        <Input
          labelText="Вопрос"
          value={state.title}
          onChange={(event) => changeTitleHandler(event)}
        />
        <hr />
        <Input
          id={0}
          labelText="Ответ №1"
          value={state.answers[0].text}
          onChange={(event) => changeInputHandler(event)}
        />
        <Input
          id={1}
          labelText="Ответ №2"
          value={state.answers[1].text}
          onChange={(event) => changeInputHandler(event)}
        />
        <Input
          id={2}
          labelText="Ответ №3"
          value={state.answers[2].text}
          onChange={(event) => changeInputHandler(event)}
        />
        <Input
          id={3}
          labelText="Ответ №4"
          value={state.answers[3].text}
          onChange={(event) => changeInputHandler(event)}
        />
        <hr />
        <div className={classes.buttonWrapper}>
          <Button onClick={(event) => onClickHandler(event)}>
            Следующий вопрос
          </Button>
          <Button type="submit" onClick={(event) => onSubmitHandler(event)}>
            Закончить тест
          </Button>
        </div>
      </form>
    </div>
  );
};
