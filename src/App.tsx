import React from "react"
import { Switch, Route } from "react-router-dom"
import { Quiz, QuizCreator, QuizList } from "@containers"
import { Layout } from "@components"
import { useGlobalStyles } from "./style"
export const App: React.FC = () => {
	const globalStyles = useGlobalStyles()

	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={QuizList} />
				<Route path="/quiz_creator" component={QuizCreator}></Route>
				<Route path="/:id" component={Quiz} />
			</Switch>
		</Layout>
	)
}
