import mongoose from "mongoose";
import { IAnswer } from "./Answer";
export interface IQuiz {
  title: string;
  rightAnswer: number;
  answers: IAnswer[];
}
