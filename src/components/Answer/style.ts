import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	answerItem: {
		width: "400px",
		height: "auto",
		color: "#FF922F",
		background: "#2C2B32",
		boxShadow: "0 0 4px #2C2B32",
		borderRadius: "4px",
		padding: "10px",
		margin: "0 auto",
		marginTop: "15px",
		cursor: "pointer",
		transition: "0.5s",
		"&:hover": {
			transition: ".5s",
			boxShadow: "0 0 2px #C87425",
		},
	},
})
