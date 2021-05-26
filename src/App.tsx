import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { Quiz, QuizCreator, QuizList, SignIn, SignUp } from "@containers"
import { Layout } from "@components"
import { useGlobalStyles } from "./style"

export const App: React.FC = () => {
	const globalStyles = useGlobalStyles()

	return (
		<Layout>
			<Switch>
				<Route exact path="/quiz_list" component={QuizList} />
				<Route path="/quiz_creator" component={QuizCreator}></Route>
				<Route exact path="/register" component={SignUp} />
				<Route exact path="/login" component={SignIn} />
				<Route path="quiz_list/:id" component={Quiz} />
				<Redirect to="/" />
			</Switch>
		</Layout>
	)
}
