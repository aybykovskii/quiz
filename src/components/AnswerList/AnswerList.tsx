import React from "react"

import { Answer } from "@components"

import { IAnswer } from "src/ts/server"
import { useStyle } from "./style"

type AnswerListProps = {
	answers: Array<IAnswer>
	userAnswersHandler: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, id: number) => void
}
export const AnswerList: React.FC<AnswerListProps> = ({ answers, userAnswersHandler }) => {
	const classes = useStyle()
	return (
		<ul className={classes.answerList}>
			{answers.map((answer, index) => {
				return (
					<Answer key={index} id={index + 1} userAnswersHandler={userAnswersHandler}>
						{answer.text}
					</Answer>
				)
			})}
		</ul>
	)
}
