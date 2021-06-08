import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	titleWrapper: {
		width: "100%",
		height: "auto",
		padding: "15px",
		marginBottom: "20px",

		borderRadius: "10px",

		background: "#2A2D3A",
	},
	title: {
		marginBottom: "10px",

		color: "#FF922F",
	},
	subtitle: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		color: "white",

		"& > small": {
			color: "#AFAFAF",
		},
	},
	AnswerWrapper: {
		width: "100%",
		height: "auto",
		padding: "15px",

		borderRadius: "10px",

		background: "#2A2D3A",
	},
	hr: {
		width: "420px",
		background: "#000",
	},
})
