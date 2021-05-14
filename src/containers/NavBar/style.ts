import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  navBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    paddingTop: "15px",
    paddingBottom: "5px",
    background: "white",
  },
  wrapper: {
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
  },
  link: {
    fontSize: "16px",
    color: "#FF9E9C",
    textDecoration: "none",
    "&:hover": {
      color: "#FF5F5C",
    },
    "&:active": {
      color: "#FB2F2C",
    },
  },
});
