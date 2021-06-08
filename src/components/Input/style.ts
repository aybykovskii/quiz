import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	Input: {
		marginBottom: "15px",
	},
	label: {
		padding: "0",
		marginBottom: "5px",

		display: "block",

		fontWeight: "bold",
	},

	input: {
		width: "100%",
		margin: "0 0 5px",
		padding: "7px",

		display: "block",

		border: "1px solid #7A97FE",
		borderRadius: "4px",
		boxSizing: "border-box",

		outline: "none",

		transition: "all 300ms ease-in-out",
	},

	span: {
		fontSize: "12px",
		fontWeight: "bold",
		color: "#f01f30",
	},

	invalid: {
		color: "#f01f30",
	},
})
