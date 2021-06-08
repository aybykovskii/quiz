import React from "react"
import { AnswerList } from "@components"
import { IAnswer } from "@ts/server"
import { useStyle } from "./style"

type TQuestionProps = {
	title: string
	answers: IAnswer[]
	activeQuestion: number
	questionsCount: number
	userAnswersHandler: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, id: number) => void
}
export const Question: React.FC<TQuestionProps> = ({
	title,
	activeQuestion,
	questionsCount,
	userAnswersHandler,
	answers,
}) => {
	const classes = useStyle()

	return (
		<>
			<div className={classes.titleWrapper}>
				<div className={classes.subtitle}>
					<small>Вопрос №{activeQuestion + 1}</small>
					<small>
						{activeQuestion + 1} из {questionsCount}
					</small>
				</div>
				<h1 className={classes.title}>{title}</h1>
			</div>

			{/* <hr className={classes.hr} /> */}
			<div className={classes.AnswerWrapper}>
				<AnswerList answers={answers} userAnswersHandler={userAnswersHandler} />
			</div>
		</>
	)
}
