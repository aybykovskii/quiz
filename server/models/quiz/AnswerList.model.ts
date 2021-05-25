import mongoose from "mongoose"
import { IAnswerList } from "../../../src/ts/server"

const AnswerListSchema = new mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	answers: Array,
})
export interface AnswerListDocument extends mongoose.Document, IAnswerList {}
export const AnswerList = mongoose.model<AnswerListDocument>("AnswerList", AnswerListSchema)
