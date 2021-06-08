import { makeStyles } from "@material-ui/styles"

export const useStyle = makeStyles({
	Select: {
		marginBottom: "15px",
	},

	label: {
		padding: "0",
		margin: "0 0 5px 0",

		display: "block",

		fontWeight: "bold",
	},

	select: {
		width: "100%",
		height: "29px",
		margin: "0 0 5px",

		display: "block",

		border: "1px solid #7A97FE",
		borderRadius: "4px",
		boxSizing: "border-box",
		outline: "none",

		transition: "all 300ms ease-in-out",
	},
})
