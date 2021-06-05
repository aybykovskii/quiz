import React from "react"
import { NavLink } from "react-router-dom"
import { useStyle } from "./style"

export const NavBar: React.FC = () => {
	const classes = useStyle()
	return (
		<div className={classes.navBar}>
			<div className={classes.wrapper}>
				<NavLink className={classes.link} to="/">
					Главная
				</NavLink>
				<NavLink className={classes.link} to="/quiz_creator">
					Создать тест
				</NavLink>
				<NavLink className={classes.link} to="/register">
					Авторизация
				</NavLink>
			</div>
		</div>
	)
}
