import { IQuestion } from "./Question";
import { IResult } from "./Result";

export interface IQuiz {
  activeQuestion: number;
  quiestios: IQuestion[];
  results: IResult[];
  isFinished: boolean;
  isLoaded: boolean;
  isAnswerGet: boolean;
}
