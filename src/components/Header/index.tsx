import React from "react";
import { useStyles } from "./style";

export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.header}>Hello world</h1>
      <h3>for all world</h3>
    </>
  );
};
