import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	navBar: {
		position: "absolute",
		top: 0,
		left: 0,

		width: "100%",
		height: "auto",

		display: "flex",
		justifyContent: "center",

		background: "#2C2B32",
	},
	wrapper: {
		width: "60%",
		padding: "10px",

		display: "flex",
		justifyContent: "space-between",

		color: "white",
	},
	link: {
		fontSize: "16px",
		color: "white",
		textDecoration: "none",

		"&:hover": {
			color: "#FF922F",
		},

		"&:active": {
			color: "#FF922F",
		},
	},
})
