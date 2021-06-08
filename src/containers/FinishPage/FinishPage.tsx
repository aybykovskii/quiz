import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

import { Button } from "@components"
import { IResult } from "@ts"

import { useStyle } from "./style"

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
			<h1>Тест завершен!</h1>
			<h3>Ваши ответы:</h3>

			{userAnswers.map((answer, key) => {
				return answer.isCorrect ? (
					<p key={key}>
						{key + 1}. Правильно
						<FontAwesomeIcon icon={faCheck} />
					</p>
				) : (
					<p key={key}>
						{key + 1}. Ошибка <FontAwesomeIcon icon={faTimes} />
					</p>
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
