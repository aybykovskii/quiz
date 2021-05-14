import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  Input: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    padding: "0",
    display: "block",
    fontWeight: "bold",
  },

  input: {
    display: "block",
    boxSizing: "border-box",
    border: "1px solid #7A97FE",
    padding: "7px",
    margin: "0 0 5px",
    width: "100%",
    outline: "none",
    transition: "all 300ms ease-in-out",
    borderRadius: "4px",
  },

  span: {
    color: "#f01f30",
    fontSize: "12px",
    fontWeight: "bold",
  },
  invalid: {
    color: "#f01f30",
  },
});
