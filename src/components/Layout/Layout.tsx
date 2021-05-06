import React from "react";
import { useStyle } from "./style";

/*
  NOTE:
    Тут ты видимо не понял, как типизировать children и сделал так.
      children: React.ReactNode
    Но на самом деле, ты их можешь даже не указывать, если укажешь, что Layout: React.FC.
    Потому что по дефолту в пропсах React.FC есть проп children
*/
export const Layout = (props: any) => {
  const classes = useStyle();
  return <div className={classes.layout}>{props.children}</div>;
};
