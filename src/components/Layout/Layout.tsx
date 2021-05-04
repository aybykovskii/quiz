import React from "react";
import { useStyle } from "./style";

export const Layout = (props: any) => {
  const classes = useStyle();
  return <div className={classes.layout}>{props.children}</div>;
};
