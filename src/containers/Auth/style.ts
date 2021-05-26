import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  page: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #8ea0dd, #8e6ad3)",
  },
  wrapper: {
    width: "280px",
    height: "auto",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "6px",
    boxShadow: "2px 2px 15px rgba(0,0,0, 0.15)",
  },
  h1: {
    margin: 0,
    marginBottom: "10px",
  },
  buttonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
