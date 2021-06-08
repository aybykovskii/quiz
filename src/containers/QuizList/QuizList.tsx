import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import { Loader, TrashCanButton } from "@components"
import { IResponse } from "@ts"

import { useStyle } from "./style"

export const QuizList: React.FC = () => {
	const [quizes, setQuizes] = useState<IResponse[]>([])
	const classes = useStyle()

	useEffect(() => {
		axios.get("/api/quizes").then(res => {
			res.data.forEach((id: string, index: number) => {
				const name = `Тест №${index + 1}`
				setQuizes(prev => [
					...prev,
					{
						id,
						name,
					},
				])
			})
		})
	}, [])

	const renderListItems = (quizes: IResponse[]) =>
		quizes.map((element, index) => (
			<Link className={classes.test} key={index} to={`/quiz/${element.id}`}>
				{element.name}
				<TrashCanButton />
			</Link>
		))

	return quizes == [] ? (
		<Loader />
	) : (
		<div className={classes.page}>
			<div className={classes.titleWrapper}>
				<h1 className={classes.title}>Список доступных тестов</h1>
			</div>
			<div className={classes.quizWrapper}>{renderListItems(quizes)}</div>
		</div>
	)
}
