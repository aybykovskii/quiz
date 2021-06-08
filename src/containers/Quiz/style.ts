import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	main: {
		height: "100vh",
		background: "#24252D",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		textAlign: "center",
		boxSizing: "border-box",
		transition: "0.3s",
	},
	wrapper: {
		display: "flex",
		margin: "auto",
		padding: "20px",
		width: "500px",
		height: "auto",
		// boxShadow: "0 0 5px #EAEAEA",
		// borderRadius: "10px",
		// border: "2px solid #fff",
		flexDirection: "column",
		textAlign: "center",
		boxSizing: "border-box",
		justifyContent: "center",
		alignItems: "center",
	},
	success: {
		color: "#69B282",
		boxShadow: "0 0 2px #69B282 !important",
		// borderColor: "#69B282",
	},
	error: {
		color: "rgba(224, 60, 49, 0.8)",
		boxShadow: "0 0 2px rgba(224, 60, 49, 0.8) !important",
		// borderColor: "rgba(224, 60, 49, 0.8)",
	},
})
