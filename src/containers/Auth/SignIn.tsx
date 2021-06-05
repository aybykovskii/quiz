import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"

import { createAuthFormControls, validate, validateEmail, validateForm } from "@utils"
import { Button, Input } from "@components"
import { AuthContext } from "../../contexts/authContext"
import { TSignIn } from "@ts/server"

import { useStyle } from "./style"

type TState = {
	isFormValid: boolean
	formControls: ReturnType<typeof createAuthFormControls>
}

export const SignIn: React.FC = () => {
	const classes = useStyle()
	const initialState: TState = {
		isFormValid: false,
		formControls: createAuthFormControls(),
	}
	const [state, setState] = useState<TState>(initialState)
	const { token, checkAndSetToken } = useContext(AuthContext)

	const changeInputHandler = (value: string, controlName: any) => {
		Object.values(state.formControls).map(element => {
			if (element == controlName) {
				element.value = value
				element.touched = true
				if (element.label == "Электронная почта") {
					element.isValid = validate(value, element.validation) && validateEmail(value)
				} else {
					element.isValid = validate(value, element.validation)
				}
			}
		})
		setState(prev => {
			return {
				...prev,
				formControls: prev.formControls,
				isFormValid: validateForm(prev.formControls),
			}
		})
	}

	const renderInputs = () => {
		return Object.values(state.formControls).map((controlName, index) => {
			return (
				<Input
					key={index}
					label={controlName.label}
					value={controlName.value}
					isValid={controlName.isValid}
					touched={controlName.touched}
					shouldValidate={!!controlName.validation}
					errorMessage={controlName.errorMessage}
					onChange={event => changeInputHandler(event.currentTarget.value, controlName)}
				/>
			)
		})
	}

	const onSingInHandler = async () => {
		const authData = {
			email: state.formControls.email.value,
			password: state.formControls.password.value,
		}
		try {
			const data: TSignIn = await axios.post("/api/auth/login", authData).then(res => res.data)
			checkAndSetToken(data.token)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className={classes.page}>
			<div className={classes.wrapper}>
				<h1 className={classes.h1}>Авторизация</h1>
				{renderInputs()}
				<Button disabled={!state.isFormValid} onClick={onSingInHandler}>
					Войти
				</Button>
				<div className={classes.buttonsWrapper}>
					<p>Еще не зарегистрированы?</p>
					<NavLink to="/register">Зарегистрироваться</NavLink>
				</div>
			</div>
		</div>
	)
}
