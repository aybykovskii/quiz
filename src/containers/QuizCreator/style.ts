import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  page: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "auto",
    height: "auto",
    padding: "20px",
    margin: "auto",
    boxSizing: "border-box",
    border: "1px solid #000",
    borderRadius: "4px",
  },
});
