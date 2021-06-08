import React from "react"
import { useStyle } from "./style"

type TOption = {
	text: number
	value: number
}

type SelectProps = {
	label: string
	value: string | number
	options: TOption[]
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<SelectProps> = ({ label, value, options, onChange }): JSX.Element => {
	const classes = useStyle()
	const htmlFor = `${label}-${Math.random()}`

	const renderSelectOptions = (options: TOption[]): JSX.Element[] =>
		options.map((option, index) => (
			<option value={option.value} key={option.value + index}>
				{option.text}
			</option>
		))

	return (
		<div className={classes.Select}>
			<label className={classes.label} htmlFor={htmlFor}>
				{label}
			</label>
			<select
				className={classes.select}
				id={htmlFor}
				value={value}
				onChange={event => onChange(event)}
			>
				{renderSelectOptions(options)}
			</select>
		</div>
	)
}

export default Select
