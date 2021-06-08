import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	answerItem: {
		width: "400px",
		height: "auto",
		padding: "10px",
		margin: "15px auto 0",

		borderRadius: "4px",
		boxShadow: "0 0 4px #2C2B32",
		background: "#2C2B32",

		color: "#FF922F",

		transition: "0.5s",

		cursor: "pointer",

		"&:hover": {
			boxShadow: "0 0 2px #C87425",

			transition: ".5s",
		},
	},
})
