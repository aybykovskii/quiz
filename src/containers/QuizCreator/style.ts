import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  page: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(90deg, #faf0cd, #fab397)",
  },
  wrapper: {
    width: "500px",
    height: "auto",
    padding: "20px",
    margin: "auto",
    boxSizing: "border-box",
    border: "1px solid #000",
    borderRadius: "4px",
  },
  ul: {
    listStyle: "none",
    padding: 0,
  },
  buttonWrapper: {
    width: "400px",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
  },
  input: {},
});
