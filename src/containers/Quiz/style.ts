import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  main: {
    height: "100vh",
    background: "linear-gradient(90deg, #b9deed, #efefef)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    boxSizing: "border-box",
    transition: "0.3s",
  },
  wrapper: {
    display: "flex",
    margin: "auto",
    padding: "20px",
    width: "500px",
    height: "auto",
    border: "2px solid #fff",
    flexDirection: "column",
    textAlign: "center",
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
  },
  success: {
    borderColor: "#69B282",
  },
  error: {
    borderColor: "rgba(224, 60, 49, 0.8)",
  },
});
