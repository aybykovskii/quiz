import { makeStyles } from "@material-ui/styles"

export const useGlobalStyles = makeStyles({
	"@global": {
		"*": {
			margin: 0,
			padding: 0,

			fontFamily: '"Montserrat Alternates", sans-serif',
			color: "#484848",

			boxSizing: "border-box",
		},

		body: {
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
		},
	},
})
