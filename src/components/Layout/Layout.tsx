import React from "react";
import { useStyle } from "./style";

type LayoutProps = {
  children: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyle();
  return <div className={classes.layout}>{children}</div>;
};
