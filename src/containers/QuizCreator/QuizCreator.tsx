import React, { useState } from "react";
import { Button, Input } from "@components";
import { useStyle } from "@containers/QuizCreator/style";
import { IQuestion } from "@ts";
import axios from "../../axios/axios-quiz";

export const QuizCreator: React.FC = () => {
  // const classes = useStyle();
  // const startQuestion: IQuestion = {
  //   title: "",
  //   answers: [
  //     { text: "", id: 1 },
  //     { text: "", id: 2 },
  //     { text: "", id: 3 },
  //     { text: "", id: 4 },
  //   ],
  //   rightAnswerId: 1,
  // };

  // const [quiz, setQuiz] = useState<IQuestion[]>([]);
  // const [state, setState] = useState<IQuestion>(startQuestion);

  // const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState((previous) => ({
  //     ...previous,
  //     title: event.target.value,
  //     isTitleValid: event.target.value == "" ? false : true,
  //   }));
  // };

  // const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState((prev) => ({
  //     ...prev,
  //     answers: [
  //       ...prev.answers,
  //       ((prev.answers[+event.target.id - 1].text = event.target.value),
  //       (prev.answers[+event.target.id - 1].isValid =
  //         event.target.value === "" ? false : true)),
  //     ].slice(0, 4),
  //   }));
  // };

  // const clickInputHandler = (event: React.MouseEvent<HTMLInputElement>) => {
  //   if (!state.answers[+event.currentTarget.id].isValid) {
  //     event.currentTarget.classList.add(classes.error);
  //   } else {
  //     event.currentTarget.classList.remove(classes.error);
  //   }
  // };

  // const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setQuiz((prev) => [...prev, state]);
  //   setState(startQuestion);
  // };

  // const onSubmitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   if (state.isTitleValid) {
  //     setQuiz((prev) => [...prev, state]);
  //     setState(startQuestion);
  //   }

  //   axios
  //     .post(`/quizes/.json`, quiz)
  //     .then((response) => console.log(response.status, response.data))
  //     .catch((e) => console.log(e));
  // };

  // return (
  //   <div className={classes.page}>
  //     <form className={classes.wrapper}>
  //       <h1>Заполните все поля</h1>
  //       <Input
  //         labelText="Вопрос"
  //         value={state.title}
  //         onChange={(event) => changeTitleHandler(event)}
  //       />
  //       <hr />

  //       {state.answers.map((answer, index) => {
  //         return (
  //           <Input
  //             key={index}
  //             id={index + 1}
  //             labelText={`Ответ №${index + 1}`}
  //             value={answer.text}
  //             onChange={(event) => changeInputHandler(event)}
  //           />
  //         );
  //       })}
  //       <hr />
  //       <div className={classes.buttonWrapper}>
  //         <Button onClick={(event) => onClickHandler(event)}>
  //           Следующий вопрос
  //         </Button>
  //         <Button type="submit" onClick={(event) => onSubmitHandler(event)}>
  //           Закончить тест
  //         </Button>
  //       </div>
  //     </form>
  //   </div>
  // );
  return <h1>Quiz creator page</h1>;
};
