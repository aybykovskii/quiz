import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	button: {
		width: "auto",
		height: "40px",
		margin: "0",
		padding: "0 15px",

		border: "none",
		borderRadius: "4px",
		backgroundColor: "#ffffff",
		boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
		outline: "none",

		textAlign: "center",
		fontWeight: "normal",

		transition: "0.5s",

		cursor: "pointer",

		"&:hover": {
			boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
			backgroundColor: "#FAD5B5",
		},

		"&:active": {
			boxShadow: "none",
			backgroundColor: "#FAB397",
		},

		"&:disabled": {
			backgroundColor: "#ccc",

			cursor: "auto",
		},
	},
})
