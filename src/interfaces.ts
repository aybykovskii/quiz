/*
  NOTE:
    Лучше сделай не один файл interfaces.ts,
    а папку ts, а в неё уже файлы Answer.d.ts(типизацию делай всегда .d.ts, тогда файл не будет компилироваться),
    Question.d.ts, UserAnswer.d.ts, а в них типы
*/

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
