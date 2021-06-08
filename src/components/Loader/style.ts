import { makeStyles } from "@material-ui/styles"
export const useStyles = makeStyles({
	"lds-spinner": {
		display: "inline-block",
		position: "relative",
		width: "80px",
		height: "80px",

		"& div:after": {
			content: '" "',
			display: "block",
			position: "absolute",
			top: "3px",
			left: "37px",
			width: "6px",
			height: "18px",
			borderRadius: "20%",
			background: "#fff",
		},
		"& div:nth-child(1)": {
			transform: "rotate(0deg)",
			animationDelay: "-1.1s",
		},
		"& div:nth-child(2)": {
			transform: "rotate(30deg)",
			animationDelay: "-1s",
		},
		"& div:nth-child(3)": {
			transform: "rotate(60deg)",
			animationDelay: "-0.9s",
		},
		"& div:nth-child(4)": {
			transform: "rotate(90deg)",
			animationDelay: "-0.8s",
		},
		"& div:nth-child(5)": {
			transform: "rotate(120deg)",
			animationDelay: "-0.7s",
		},
		"& div:nth-child(6)": {
			transform: "rotate(150deg)",
			animationDelay: "-0.6s",
		},
		"& div:nth-child(7)": {
			transform: "rotate(180deg)",
			animationDelay: "-0.5s",
		},
		"& div:nth-child(8)": {
			transform: "rotate(210deg)",
			animationDelay: "-0.4s",
		},
		"& div:nth-child(9)": {
			transform: "rotate(240deg)",
			animationDelay: "-0.3s",
		},
		"& div:nth-child(10)": {
			transform: "rotate(270deg)",
			animationDelay: "-0.2s",
		},
		"& div:nth-child(11)": {
			transform: "rotate(300deg)",
			animationDelay: "-0.1s",
		},
		"& div:nth-child(12)": {
			transform: "rotate(330deg)",
			animationDelay: "0s",
		},
		"& div": {
			transformOrigin: "40px 40px",
			animation: "$lds-spinner 1.2s linear infinite",
		},
	},
	"@keyframes lds-spinner": {
		"0%": {
			opacity: "1",
		},
		"100%": {
			opacity: "0",
		},
	},
})
