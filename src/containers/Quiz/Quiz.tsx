import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router-dom"

import { FinishPage } from "@containers"
import { Loader, Question } from "@components"

import { useStyle } from "./style"
import { IQuiz } from "@ts"
import axios from "axios"

interface QuizParams {
	id: string
}
interface QuizProps extends RouteComponentProps<QuizParams> {}

export const Quiz: React.FC<QuizProps> = props => {
	const classes = useStyle()

	const emptyQuiz: IQuiz = {
		isAnswerGet: false,
		isFinished: false,
		activeQuestion: 0,
		isLoaded: false,
		questions: [],
		results: [],
	}

	const [quiz, setQuiz] = useState<IQuiz>(emptyQuiz)

	useEffect(() => {
		console.log(props.match.params.id)
		axios.get(`/api/quizes/${props.match.params.id}`).then(response => {
			setQuiz(prev => ({
				...prev,
				isLoaded: true,
				questions: response.data,
			}))
		})
	}, [])

	//Проверка ответа пользователя и обновление массива ответов
	const checkIsAnswerGet = (target: EventTarget & HTMLLIElement): void => {
		if (!quiz.isAnswerGet) {
			setQuiz(prev => ({
				...prev,
				isAnswerGet: true,
				results: [
					...prev.results,
					{
						userAnswer: +target.id,
						isCorrect: +target.id == prev.questions[prev.activeQuestion].rightAnswer,
						answerTitle: prev.questions[prev.activeQuestion].title,
					},
				],
			}))
		}
	}

	//Добавление класса ответу в зависимоти от его правильности
	const addClassToTarget = (target: EventTarget & HTMLLIElement, quiz: IQuiz): void => {
		if (+target.id == quiz.questions[quiz.activeQuestion].rightAnswer) {
			target.classList.add(classes.success)
		} else {
			target.classList.add(classes.error)
		}
	}

	//Удаление класса и проверка на окончание теста
	const removeClassFromTargetAndUpdateState = (
		target: EventTarget & HTMLLIElement,
		quiz: IQuiz
	): void => {
		const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
			target.classList.remove(classes.success, classes.error)

			if (quiz.activeQuestion + 1 !== quiz.questions.length) {
				setQuiz(prev => ({
					...prev,
					activeQuestion: prev.activeQuestion + 1,
					isAnswerGet: false,
				}))
			} else {
				setQuiz(prev => ({
					...prev,
					isFinished: true,
				}))
			}

			return clearTimeout(timer)
		}, 1500)
	}
	//Функция по нажатию на вариант ответа
	const userAnswersHandler = (event: React.MouseEvent<HTMLLIElement>): void => {
		const target = event.currentTarget
		checkIsAnswerGet(target)
		addClassToTarget(target, quiz)
		removeClassFromTargetAndUpdateState(target, quiz)
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///Finish page buttons functions
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Функция повтора теста
	const testRepeatHandler = (): void => {
		setQuiz(prev => ({
			...emptyQuiz,
			questions: prev.questions,
			isLoaded: true,
		}))
	}

	return (
		<div className={classes.main}>
			<div className={classes.wrapper}>
				{!quiz.isLoaded ? (
					<Loader />
				) : quiz.isFinished ? (
					<FinishPage
						userAnswers={quiz.results}
						questions={quiz.questions}
						testRepeatHandler={testRepeatHandler}
					/>
				) : (
					<Question
						title={quiz.questions[quiz.activeQuestion].title}
						answers={quiz.questions[quiz.activeQuestion].answers}
						userAnswersHandler={event => userAnswersHandler(event)}
						activeQuestion={quiz.activeQuestion}
						questionsCount={quiz.questions.length}
					/>
				)}
			</div>
		</div>
	)
}
