import React, { useState } from "react"
import axios from "axios"

import { createFormControls, validate, validateForm } from "@utils"
import { Button, Input, Loader, Select } from "@components"
import { IQuestion, IValidControl } from "@ts"

import { useStyle } from "./style"
import { JsxElement } from "typescript"

type TState = {
	quiz: IQuestion[]
	isFormValid: boolean
	rightAnswer: number
	formControls: ReturnType<typeof createFormControls>
}

export const QuizCreator: React.FC = (): JSX.Element => {
	const classes = useStyle()

	const [quizState, setQuizState] = useState<TState>({
		quiz: [],
		isFormValid: false,
		rightAnswer: 1,
		formControls: createFormControls(),
	})

	//Функция изменяющая select state
	const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const target = event.currentTarget
		setQuizState(prev => ({
			...prev,
			rightAnswer: +target.value,
		}))
	}

	//Изменение state при изменении value у input
	const ChangeInputHandler = (value: string, controlNameId: number): void => {
		const formControls = { ...quizState.formControls }

		Object.values(formControls).map(control => {
			if (control.id === controlNameId) {
				control.touched = true
				control.value = value
				control.isValid = validate(control.value, control.validation)
			}
		})

		setQuizState(prev => ({
			...prev,
			formControls,
			isFormValid: validateForm(formControls),
		}))
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///Функции отрабатывающие по нажатию на кнопки
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//Функция отрабатывающая по нажатию на кнопку следующего вопроса
	const onNextQuestionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		const quiz = quizState.quiz.concat()

		const { question, option1, option2, option3, option4 } = quizState.formControls

		const questionItem: IQuestion = {
			title: question.value,
			rightAnswer: quizState.rightAnswer,
			answers: [
				{ text: option1.value },
				{ text: option2.value },
				{ text: option3.value },
				{ text: option4.value },
			],
		}

		quiz.push(questionItem)

		setQuizState({
			quiz,
			isFormValid: false,
			rightAnswer: 1,
			formControls: createFormControls(),
		})
	}

	//Функция отрабатывающая по нажатию на кнопку завершения создания теста
	const onCompleteQuizHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		try {
			await axios.post("/api/quizes", quizState.quiz)

			setQuizState({
				quiz: [],
				isFormValid: false,
				rightAnswer: 1,
				formControls: createFormControls(),
			})
		} catch (e) {
			console.log(e)
		}
	}

	const onSubmitPreventDefault = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
	}

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///Рендеринг элементов
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	const renderInputs = (): JSX.Element[] => {
		return Object.values(quizState.formControls).map((controlName, index) => (
			<React.Fragment key={controlName + index.toString()}>
				<Input
					label={controlName.label}
					value={controlName.value}
					touched={controlName.touched}
					isValid={controlName.isValid}
					shouldValidate={!!controlName.validation}
					errorMessage={controlName.errorMessage}
					onChange={event => ChangeInputHandler(event.currentTarget.value, controlName.id!)}
				/>
				{!!index ? null : <hr />}
			</React.Fragment>
		))
	}

	return (
		<div className={classes.page}>
			<form className={classes.wrapper} onSubmit={event => onSubmitPreventDefault(event)}>
				{renderInputs()}
				<Select
					label="Выберите правильный ответ"
					value={quizState.rightAnswer}
					onChange={selectChangeHandler}
					options={[
						{ text: 1, value: 1 },
						{ text: 2, value: 2 },
						{ text: 3, value: 3 },
						{ text: 4, value: 4 },
					]}
				/>
				<div className={classes.buttonWrapper}>
					<Button onClick={onNextQuestionHandler} disabled={!quizState.isFormValid}>
						Следующий вопрос
					</Button>
					<Button onClick={onCompleteQuizHandler} disabled={quizState.quiz.length === 0}>
						Закончить тест
					</Button>
				</div>
			</form>
		</div>
	)
}
