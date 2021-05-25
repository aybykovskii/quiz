import mongoose from "mongoose"
import { IQuiz } from "../../../src/ts/server"

const QuizSchema = new mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId },
	title: { type: String },
	rightAnswer: { type: Number },
	answers: { type: mongoose.Types.ObjectId },
})

export interface QuizDocument extends mongoose.Document, IQuiz {}
export const Quiz = mongoose.model<QuizDocument>("Quiz", QuizSchema)
