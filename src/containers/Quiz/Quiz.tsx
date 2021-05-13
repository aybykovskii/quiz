import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { FinishPage } from "@containers";
import { Loader, Question } from "@components";

import { useStyle } from "./style";
import { IQuiz } from "@ts";
import axios from "@axios/axios-quiz";

interface QuizParams {
  id: string;
}
interface QuizProps extends RouteComponentProps<QuizParams> {}

export const Quiz: React.FC<QuizProps> = (props) => {
  const classes = useStyle();

  const emptyQuiz: IQuiz = {
    isAnswerGet: false,
    isFinished: false,
    activeQuestion: 0,
    isLoaded: false,
    quiestios: [],
    results: [],
  };
  const [quiz, setQuiz] = useState<IQuiz>(emptyQuiz);

  useEffect(() => {
    axios.get(`/quizes/${props.match.params.id}.json`).then((response) => {
      setQuiz((prev) => {
        return {
          ...prev,
          isLoaded: true,
          quiestios: response.data,
        };
      });
    });
  }, []);

  const userAnswersHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    //проверка ответа пользователя и обновление массива ответов
    if (quiz.isAnswerGet === false) {
      setQuiz((prev) => {
        return {
          ...prev,
          isAnswerGet: true,
          results: [
            ...prev.results,
            {
              userAnswer: +target.id,
              isCorrect:
                +target.id == prev.quiestios[prev.activeQuestion].rightAnswerId,
              answerTitle: prev.quiestios[prev.activeQuestion].title,
            },
          ],
        };
      });
    }
    //добавление класса ответу в зависимоти от его правильности
    if (+target.id == quiz.quiestios[quiz.activeQuestion].rightAnswerId) {
      target.classList.add(classes.success);
    } else {
      target.classList.add(classes.error);
    }

    //удаление класса и проверка на окончание теста
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      target.classList.remove(classes.success, classes.error);
      if (quiz.activeQuestion + 1 !== quiz.quiestios.length) {
        setQuiz((prev) => {
          return {
            ...prev,
            activeQuestion: prev.activeQuestion + 1,
            isAnswerGet: false,
          };
        });
      } else {
        setQuiz((prev) => {
          return {
            ...prev,
            isFinished: true,
          };
        });
      }

      return clearTimeout(timer);
    }, 1500);
  };

  const testRepeatHandler = () => {
    setQuiz((prev) => {
      return {
        ...emptyQuiz,
        quiestios: prev.quiestios,
        isLoaded: true,
      };
    });
  };

  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        {quiz.isLoaded == false ? (
          <Loader />
        ) : quiz.isFinished == true ? (
          <FinishPage
            userAnswers={quiz.results}
            testRepeatHandler={testRepeatHandler}
          />
        ) : (
          <Question
            title={quiz.quiestios[quiz.activeQuestion].title}
            answers={quiz.quiestios[quiz.activeQuestion].answers}
            userAnswersHandler={(event) => userAnswersHandler(event)}
            activeQuestion={quiz.activeQuestion}
            questionsCount={quiz.quiestios.length}
          />
        )}
      </div>
    </div>
  );
};
