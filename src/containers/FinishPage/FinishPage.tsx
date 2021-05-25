import React from "react"

import { Button } from "@components"

import { IResult } from "src/ts"
import { useStyle } from "./style"
import { Link } from "react-router-dom"

type FinishPageProps = {
	userAnswers: Array<IResult>
	testRepeatHandler: () => void
	quizListHandler: () => void
}
export const FinishPage: React.FC<FinishPageProps> = ({
	userAnswers,
	testRepeatHandler,
	quizListHandler,
}) => {
	const classes = useStyle()

	const onClickHandler = () => {
		console.log("button clicked")
	}

	return (
		<>
			<h1>Тест пройден</h1>
			<h3>Ваши ответы:</h3>

			{userAnswers.map((answer, key) => {
				return answer.isCorrect ? (
					<p key={key}>{key + 1}. Правильно</p>
				) : (
					<p key={key}>{key + 1}. Ошибка</p>
				)
			})}
			<div className={classes.buttonsWrapper}>
				<Button onClick={testRepeatHandler}>Повторить</Button>
				<Link to="/">
					<Button onClick={quizListHandler}>Список тестов</Button>
				</Link>
			</div>
		</>
	)
}
