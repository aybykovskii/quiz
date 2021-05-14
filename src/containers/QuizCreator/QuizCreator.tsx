import React, { useState } from "react";

import { Button, Input, Select } from "@components";
import { IQuestion, IValidControl } from "@ts";
import { createControl, validate, validateForm } from "@controller";
import axios from "../../axios/axios-quiz";

import { useStyle } from "@containers/QuizCreator/style";

const createOptionControl = (number: number) => {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMessage: "Значение не может быть пустым",
      id: number,
    },
    { required: true }
  );
};

const createFormControls = () => {
  return {
    question: createControl(
      {
        label: "Введите вопрос",
        errorMessage: "Вопрос не может быть пустым",
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
};

type State = {
  quiz: IQuestion[];
  isFormValid: boolean;
  rightAnswerId: number;
  formControls: ReturnType<typeof createFormControls>;
};

export const QuizCreator: React.FC = () => {
  const classes = useStyle();
  const [state, setState] = useState<State>({
    quiz: [],
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls(),
  });

  //Изменение state при изменении value у input
  const ChangeInputHandler = (value: string, controlName: any) => {
    const formControls = { ...state.formControls };
    const control = { ...controlName[1] };

    Object.entries(formControls).map((element) => {
      if (element[1].id == control.id) {
        element[1].touched = true;
        element[1].value = value;
        element[1].isValid = validate(element[1].value, element[1].validation);
      }
    });

    setState((prev) => {
      return {
        ...prev,
        formControls,
        isFormValid: validateForm(formControls),
      };
    });
  };
  //Рендеринг Input с параметрами
  const renderInputs = () => {
    return Object.entries(state.formControls).map((controlName, index) => {
      const control: IValidControl = controlName[1];

      return (
        <React.Fragment key={controlName + index.toString()}>
          <Input
            label={control.label}
            value={control.value}
            isValid={control.isValid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              ChangeInputHandler(event.currentTarget.value, controlName)
            }
          />
          {index == 0 ? <hr /> : null}
        </React.Fragment>
      );
    });
  };

  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.currentTarget;
    setState((prev) => {
      return {
        ...prev,
        rightAnswerId: +target.value,
      };
    });
  };

  const onNextQuestionHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const quiz = state.quiz.concat();
    const index = quiz.length + 1;

    const { question, option1, option2, option3, option4 } = state.formControls;

    const questionItem: IQuestion = {
      title: question.value,
      rightAnswerId: state.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id! },
        { text: option2.value, id: option2.id! },
        { text: option3.value, id: option3.id! },
        { text: option4.value, id: option4.id! },
      ],
    };

    quiz.push(questionItem);

    setState({
      quiz,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    });
  };
  const onCompleteQuizHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    try {
      await axios.post("/quizes.json", state.quiz);

      setState({
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls(),
      });
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={classes.page}>
      <form className={classes.wrapper} onSubmit={(event) => onSubmit(event)}>
        {renderInputs()}

        <Select
          label="Выберите правильный ответ"
          value={state.rightAnswerId}
          onChange={selectChangeHandler}
          options={[
            { text: 1, value: 1 },
            { text: 2, value: 2 },
            { text: 3, value: 3 },
            { text: 4, value: 4 },
          ]}
        />
        <div className={classes.buttonWrapper}>
          <Button onClick={onNextQuestionHandler} disabled={!state.isFormValid}>
            Следующий вопрос
          </Button>
          <Button
            onClick={onCompleteQuizHandler}
            disabled={state.quiz.length == 0}
          >
            Закончить тест
          </Button>
        </div>
      </form>
    </div>
  );
};
