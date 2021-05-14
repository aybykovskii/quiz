import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  page: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "linear-gradient(90deg, #aea4e3, #d3ffe8)",
  },
  title: {
    fontSize: "26px",
  },
  test: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#7A97FE",
    "&:hover": {
      color: "#426BFE",
    },
    "&:active": {
      color: "#0D41FD",
    },
  },
});
