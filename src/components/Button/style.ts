import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  button: {
    width: "auto",
    height: "40px",
    margin: "0",
    padding: "0 15px",
    textAlign: "center",
    outline: "none",
    cursor: "pointer",
    transition: "0.5s",
    backgroundColor: "#ffffff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "normal",
    "&:hover": {
      backgroundColor: "#9AE8ED",
    },
    "&:active": {
      backgroundColor: "#26BFBF",
    },
  },
});
