import React from "react"
import { useStyle } from "./style"

type ButtonProps = {
	type?: "button" | "submit" | "reset" | undefined
	disabled?: boolean
	children: React.ReactNode
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export const Button: React.FC<ButtonProps> = ({
	type = "button",
	children,
	disabled,
	onClick,
}): JSX.Element => {
	const classes = useStyle()

	return (
		<button
			type={type}
			className={classes.button}
			disabled={disabled}
			onClick={event => onClick(event)}
		>
			{children}
		</button>
	)
}
