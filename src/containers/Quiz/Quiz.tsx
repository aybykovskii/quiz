import React, { useEffect, useState } from "react";

import { FinishPage } from "@containers/FinishPage/FinishPage";
import { Question } from "@components/index";

import { IQuestion, IUserAnswer } from "src/interfaces";
import { useStyle } from "./style";

/*
  NOTE:
    Не то чтобы лучше, просто не совсем логично использовать interface для пропсов, interface это больше для классов, наверное.
    Так что лучше вот так:
      interface IQuizProps {...}   =>   type QuizProps = {...}
*/
interface IQuizProps {
  quiz: Array<IQuestion>;
}

export const Quiz: React.FC<IQuizProps> = ({ quiz }) => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [title, setTitle] = useState(() => quiz[activeQuestion].title);
  const [userAnswers, setUserAnswers] = useState<IUserAnswer[]>([]);
  const [isFinished, setIsFinished] = useState<Boolean>(false);

  const classes = useStyle();

  const userAnswersHandler = (event: React.MouseEvent<HTMLUListElement>, answerId: Number) => {
    setUserAnswers((prev: IUserAnswer[]) => [
      ...prev,
      {
        userAnswer: answerId,
        isCorrect: quiz[activeQuestion].rightAnswerId == answerId,
      },
    ]);

    const target = event.currentTarget;

    /*
      NOTE:
        Вообще не самое лучшее использовать тернарный оператор в таком месте, плохо читается.
        Лучше просто:
          if(answerId === quiz[activeQuestion].rightAnswerId){
            target.classList.add(classes.success);
          }
          else{
            target.classList.add(classes.error)
          }
        На 3 строчки больше, зато гораздо понятнее
    */
    answerId === quiz[activeQuestion].rightAnswerId
      ? target.classList.add(classes.success)
      : target.classList.add(classes.error);

    /*
      NOTE:
          1) Ты наверное недоглядел, но тут же не нужен интервал.
             Ты же его удаляешь после первого выполнения.
             Поэтмоу можно просто setTimeout сделать
          2) Лучше any использовать на столько редко, на сколько это возможно.
             TS не всегда умён и тут он говорит, что setInterval возвращает NodeJS.Timeout.
             Но ты же знаешь, что он возвращает число, поэтому ты мог сделать так:
               const bgInterval = setInterval(() => ...) as any as number;
             Т.е самому указать, что вернёт эта функция. Тогда проблем с типизацией не будет.
    */
    const bgInterval = (setInterval(() => {
      target.classList.remove(classes.success, classes.error);

      /*
        NOTE:
          Ну и тут то же самое(с тернарным оператором)
      */
      quiz[activeQuestion + 1] ? setActiveQuestion((prev) => prev + 1) : setIsFinished(true);

      return clearInterval(bgInterval);
    }, 500) as any) as number;
  };

  /*
    NOTE:
      Это тоже на самом-то деле не нужно, потому что ты мог вообще не создавать стейт title.
      У тебя же activeQuestion - это стейт, и всё, что с ним связано, будет меняться.
      (Ниже напишу остальное)
  */
  useEffect(() => {
    setTitle(quiz[activeQuestion].title);
  }, [activeQuestion]);

  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        {isFinished ? (
          <FinishPage userAnswers={userAnswers} />
        ) : (
          <Question
            /*
              NOTE:
                Тогда здесь в title вместо {title} ты мог бы просто передать {quiz[activeQuestion].title}
            */
            title={title}
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
