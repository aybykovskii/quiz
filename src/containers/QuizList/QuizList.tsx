import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import axios from "axios"

import { Loader } from "@components"
import { IResponse } from "@ts"
import { useStyle } from "./style"

export const QuizList: React.FC = () => {
	const [quizes, setQuizes] = useState<IResponse[]>([])
	const classes = useStyle()

	useEffect(() => {
		axios.get("/api/quizes").then(response => {
			response.data.forEach((key: string, index: number) => {
				setQuizes(prev => [
					...prev,
					{
						id: key,
						name: `Тест №${index + 1}`,
					},
				])
			})
		})
	}, [])

	return quizes == [] ? (
		<Loader />
	) : (
		<div className={classes.page}>
			<h1 className={classes.title}>Список доступных тестов</h1>
			{quizes.map((element, index) => {
				return (
					<Link className={classes.test} key={index} to={`/quiz/${element.id}`}>
						{element.name}
					</Link>
				)
			})}
		</div>
	)
}
