import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  Select: {
    marginBottom: "15px",
  },

  label: {
    margin: "0 0 3px 0",
    padding: "0",
    fontWeight: "bold",
    display: "block",
  },

  select: {
    display: "block",
    boxSizing: "border-box",
    border: "1px solid #bebebe",
    margin: "0 0 5px",
    height: "29px",
    width: "100%",
    outline: "none",
    transition: "all 300ms ease-in-out",
  },
});
