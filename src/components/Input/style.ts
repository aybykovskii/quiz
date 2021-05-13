import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  input: {
    margin: "15px",
    border: "none",
    borderRadius: "4px",
    width: "200px",
    height: "auto",
    padding: "5px 10px",
    boxSizing: "border-box",
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
});
