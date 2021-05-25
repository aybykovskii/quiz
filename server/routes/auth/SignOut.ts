import { Request, Response } from "express";

module.exports = (req: Request, res: Response) => {
  if (!localStorage.getItem("LOCAL_TOKEN")) {
    res.send({
      error: "token is undefind",
    });
  } else {
    localStorage.removeItem("LOCAL_TOKEN");
    res.send({
      status: 200,
    });
  }
};
