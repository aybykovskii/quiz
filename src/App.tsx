import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { Quiz, QuizCreator, QuizList, SignIn, SignUp } from "@containers"
import { Layout } from "@components"
import { useGlobalStyles } from "./style"
import { AuthContextProvider } from "./contexts/authContext"

export const App: React.FC = () => {
	const globalStyles = useGlobalStyles()

	return (
		<AuthContextProvider>
			<Layout>
				<Switch>
					<Route exact path="/" component={QuizList} />
					<Route path="/quiz_creator" component={QuizCreator}></Route>
					<Route exact path="/register" component={SignUp} />
					<Route exact path="/login" component={SignIn} />
					<Route path="/quiz/:id" component={Quiz} />
					<Redirect to="/" />
				</Switch>
			</Layout>
		</AuthContextProvider>
	)
}
