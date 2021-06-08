import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	titleWrapper: {
		width: "100%",
		height: "auto",
		padding: "15px",
		borderRadius: "10px",
		background: "#2A2D3A",
		marginBottom: "20px",
	},
	title: {
		color: "#FF922F",
		marginBottom: "10px",
	},
	subtitle: {
		color: "white",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		"& > h3, & > small": {
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
