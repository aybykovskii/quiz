import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	main: {
		height: "100vh",

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		textAlign: "center",

		background: "#24252D",
		boxSizing: "border-box",
		transition: "0.3s",
	},
	wrapper: {
		width: "500px",
		height: "auto",
		margin: "auto",
		padding: "20px",

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",

		boxSizing: "border-box",
	},
	success: {
		color: "#69B282",

		boxShadow: "0 0 2px #69B282 !important",
	},
	error: {
		color: "rgba(224, 60, 49, 0.8)",

		boxShadow: "0 0 2px rgba(224, 60, 49, 0.8) !important",
	},
})
