import { makeStyles } from "@material-ui/styles"
export const useStyle = makeStyles({
	button: {
		width: "auto",
		height: "auto",
		padding: "5px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "4px",
		background: "#2C2B32",
		"&:hover": {
			"& svg": {
				fill: "#FF922F",
			},
		},
	},
})
