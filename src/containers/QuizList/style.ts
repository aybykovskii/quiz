import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	page: {
		width: "100%",
		height: "100vh",

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",

		background: "#24252D",
	},
	titleWrapper: {
		width: "500px",
		height: "auto",
		padding: "15px",
		marginBottom: "15px",

		background: "#2A2D3A",
		borderRadius: "10px",
	},
	title: {
		fontSize: "26px",
		color: "#FF922F",
	},
	quizWrapper: {
		width: "500px",
		height: "auto",

		display: "flex",
		flexDirection: "column",
	},
	test: {
		width: "100%",
		height: "auto",
		padding: "10px",
		marginBottom: "10px",

		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		borderRadius: "6px",
		background: "#2A2D3A",
		transition: ".3s",

		fontSize: "18px",
		color: "#FF922F",
		textDecoration: "none",

		"&:hover": {
			boxShadow: "0 0 4px #C87425",
		},
	},
})
