import { IQuestion } from "./Question"
import { IResult } from "./Result"

export interface IQuiz {
	activeQuestion: number
	questions: IQuestion[]
	results: IResult[]
	isFinished: boolean
	isLoaded: boolean
	isAnswerGet: boolean
}
