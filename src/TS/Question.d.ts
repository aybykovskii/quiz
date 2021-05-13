import { IAnswer } from "./Answer";

export interface IQuestion {
  title: string;
  answers: IAnswer[];
  rightAnswerId: number;
}
