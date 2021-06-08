import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	page: {
		width: "100%",
		height: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		background: "#24252D",
	},
	titleWrapper: {
		width: "500px",
		height: "auto",
		padding: "15px",
		background: "#2A2D3A",
		borderRadius: "10px",
		marginBottom: "15px",
	},
	title: {
		color: "#FF922F",
		fontSize: "26px",
	},
	quizWrapper: {
		width: "500px",
		height: "auto",
		display: "flex",
		flexDirection: "column",
	},
	test: {
		width: "100%",
		borderRadius: "6px",
		display: "flex",
		justifyContent: "space-between",
		padding: "10px",
		alignItems: "center",
		height: "auto",
		textDecoration: "none",
		fontSize: "18px",
		background: "#2A2D3A",
		marginBottom: "10px",
		color: "#FF922F",
		transition: ".3s",
		"&:hover": {
			boxShadow: "0 0 4px #C87425",
		},
	},
})
