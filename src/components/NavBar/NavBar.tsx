import React from "react"
import { NavLink } from "react-router-dom"

import { AuthContext } from "../../contexts"

import { useStyle } from "./style"

export const NavBar: React.FC = (): JSX.Element => {
	const classes = useStyle()
	const { isAuth } = React.useContext(AuthContext)()

	React.useEffect(() => {
		console.log(isAuth)
	}, [isAuth])

	return (
		<div className={classes.navBar}>
			<div className={classes.wrapper}>
				<NavLink className={classes.link} to="/">
					Главная
				</NavLink>
				{isAuth ? (
					<NavLink className={classes.link} to="/quiz_creator">
						Создать тест
					</NavLink>
				) : (
					<NavLink className={classes.link} to="/login">
						Авторизация
					</NavLink>
				)}
			</div>
		</div>
	)
}
