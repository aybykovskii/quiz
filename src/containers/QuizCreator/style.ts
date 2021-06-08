import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	page: {
		width: "100%",
		height: "100vh",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		background: "linear-gradient(90deg, #faf0cd, #fab397)",
	},
	wrapper: {
		width: "500px",
		height: "auto",
		padding: "20px 50px",
		margin: "70px auto 0",

		borderRadius: "4px",
		boxSizing: "border-box",
		backgroundColor: "white",
		boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.25);",
	},

	buttonWrapper: {
		width: "400px",
		margin: "auto",

		display: "flex",
		justifyContent: "space-between",
	},
	input: {
		borderRadius: "4px",
	},
})
