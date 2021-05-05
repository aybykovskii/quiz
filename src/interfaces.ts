export interface IAnswer {
  text: String;
  id: Number;
}

export interface IQuestion {
  title: String;
  answers: Array<IAnswer>;
  rightAnswerId: Number;
}
export interface IUserAnswer {
  userAnswer: Number;
  isCorrect: Boolean;
}
