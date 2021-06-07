import React, { useContext, useEffect } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { Quiz, QuizCreator, QuizList, SignIn, SignUp } from "@containers"
import { Layout } from "@components"
import { useGlobalStyles } from "./style"
import { AuthContext, AuthContextProvider } from "./contexts/authContext"

export const App: React.FC = () => {
	const globalStyles = useGlobalStyles()
	const context = useContext(AuthContext)
	const { getTokenFromLS, isAuth, setIsAuth } = context()
	useEffect(() => {
		const token = getTokenFromLS()
		// setAuth(true)
	}, [])
	return (
		<AuthContextProvider>
			<Layout>
				{isAuth ? (
					<Switch>
						<Route exact path="/" component={QuizList} />
						<Route path="/quiz_creator" component={QuizCreator}></Route>
						<Route path="/quiz/:id" component={Quiz} />
						<Redirect to="/" />
					</Switch>
				) : (
					<Switch>
						<Route exact path="/" component={QuizList} />
						<Route exact path="/register" component={SignUp} />
						<Route exact path="/login" component={SignIn} />
						<Route path="/quiz/:id" component={Quiz} />
						<Redirect to="/" />
					</Switch>
				)}
			</Layout>
		</AuthContextProvider>
	)
}
