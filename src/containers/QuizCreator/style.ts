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
    padding: "20px 50px",
    margin: "auto",
    marginTop: "70px",
    boxSizing: "border-box",
    borderRadius: "4px",
    backgroundColor: "white",
    boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.25);",
  },

  buttonWrapper: {
    width: "400px",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
  },
  input: {
    borderRadius: "4px",
  },
});
