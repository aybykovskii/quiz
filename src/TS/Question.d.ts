import { IAnswer } from "./server/Answer"

export interface IQuestion {
	title: string
	answers: IAnswer[]
	rightAnswer: number
}
