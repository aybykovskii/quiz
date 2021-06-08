import React from "react"
import { useStyles } from "./style"
export const Loader: React.FC = () => {
	const classes = useStyles()
	return (
		<div className={classes["lds-spinner"]}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
