import mongoose from "mongoose"
import { IQuizes } from "../../../src/ts/server"
const QuizesSchema = new mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId },
	quizes: { type: [mongoose.Types.ObjectId] },
})

export interface QuizesDocument extends mongoose.Document, IQuizes {}
export const Quizes = mongoose.model<QuizesDocument>("Quizes", QuizesSchema)
