import React, { useState } from "react"
import { createAuthFormControls, validate, validateEmail, validateForm } from "@utils"
import { useStyle } from "./style"
import { Button, Input } from "@components"
import { NavLink } from "react-router-dom"
import axios from "axios"

type TState = {
	isFormValid: boolean
	formControls: ReturnType<typeof createAuthFormControls>
}

export const SignUp: React.FC = () => {
	const classes = useStyle()
	const initialState: TState = {
		isFormValid: false,
		formControls: createAuthFormControls(),
	}
	const [state, setState] = useState<TState>(initialState)

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

	const onSignUpHandler = async () => {
		const authData = {
			email: state.formControls.email.value,
			password: state.formControls.password.value,
		}
		try {
			await axios
				.post("/api/auth/register", authData)
				.then(res => res.data)
				.then(data => console.log(data))
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className={classes.page}>
			<div className={classes.wrapper}>
				<h1 className={classes.h1}>Регистрация</h1>
				{renderInputs()}
				<Button disabled={!state.isFormValid} onClick={onSignUpHandler}>
					Регистрация
				</Button>
				<div className={classes.buttonsWrapper}>
					<p>Уже зарегистрированы?</p>
					<NavLink to="/login">Войти</NavLink>
				</div>
			</div>
		</div>
	)
}
