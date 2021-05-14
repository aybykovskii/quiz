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
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      backgroundColor: "#FAD5B5",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
    },
    "&:active": {
      backgroundColor: "#FAB397",
      boxShadow: "none",
    },
    "&:disabled": {
      backgroundColor: "#fff",
      cursor: "auto",
    },
  },
});
