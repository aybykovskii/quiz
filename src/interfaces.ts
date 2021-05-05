export interface IAnswers {
  text: String;
  id: Number;
}

export interface IQuestion {
  title: String;
  answers: Array<IAnswers>;
  rightAnswerId: Number;
}
