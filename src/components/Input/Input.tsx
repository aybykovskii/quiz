import React from "react"
import { useStyle } from "./style"

type InputProps = {
	label: string
	value: string
	type?: string
	isValid: boolean
	shouldValidate: boolean
	errorMessage: string
	touched: boolean
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
	label,
	value,
	type = "text",
	isValid,
	shouldValidate,
	errorMessage,
	touched,
	onChange,
}): JSX.Element => {
	const classes = useStyle()
	const styles = [classes.label]

	const isInvalid = (isValid: boolean, shouldValidate: boolean, touched: boolean): boolean => {
		return isValid && shouldValidate && touched
	}

	if (isInvalid(isValid, shouldValidate, touched)) {
		styles.push(classes.invalid)
	}

	const SpanErrorMessage = errorMessage ? errorMessage : "Заполните это поле"
	const id = type + Math.random().toString()
	const inputProps = {
		id,
		type,
		value,
		onChange,
	}
	return (
		<div className={classes.Input}>
			<label className={styles.join(" ")} htmlFor={id}>
				{label}
			</label>
			<input className={classes.input} {...inputProps} />
			{!isInvalid(isValid, shouldValidate, touched) ? null : (
				<span className={classes.span}>{SpanErrorMessage}</span>
			)}
		</div>
	)
}
