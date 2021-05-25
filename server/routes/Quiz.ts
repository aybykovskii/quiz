import express from "express"
import mongoose from "mongoose"
import { IQuiz } from "../../src/ts/server"
import { AnswerList, Quiz, Quizes } from "../models"
const tokenMiddleware = require("../middlewares/tokenMiddleware")
const router = express.Router()

router.get("/", async (req, res) => {
	const quizesId: string[] = []
	const quizesList = await Quizes.find()
	quizesList.map(quiz => quizesId.push(quiz._id))
	res.send(quizesId)
})

router.get("/:id", async (req, res) => {
	const quizesArray = await Quizes.findById(req.params.id)
	if (!quizesArray) {
		res.send({
			errorMessage: "Теста с таким id не существует",
		})
	} else {
		const quizes = quizesArray.quizes
		const resQuizes: IQuiz[] = []
		for (let i = 0; i < quizes.length; i++) {
			const quiz = await Quiz.findById(quizes[i])
			const ans = await AnswerList.findById(quiz!.answers)
			resQuizes.push({
				title: quiz!.title,
				rightAnswer: quiz!.rightAnswer,
				answers: ans!.answers,
			})
		}
		res.send(resQuizes)
	}
})

router.post("/", async (req, res) => {
	const requestQuizes: IQuiz[] = req.body
	const quizesIds: string[] = []
	for (let i = 0; i < requestQuizes.length; i++) {
		const currentQuiz: IQuiz = requestQuizes[i]
		const answers = await AnswerList.create({
			_id: new mongoose.Types.ObjectId(),
			answers: [
				{ text: currentQuiz.answers[0].text, id: 1 },
				{ text: currentQuiz.answers[1].text, id: 2 },
				{ text: currentQuiz.answers[2].text, id: 3 },
				{ text: currentQuiz.answers[3].text, id: 4 },
			],
		})
		const quiz = await Quiz.create({
			_id: new mongoose.Types.ObjectId(),
			title: currentQuiz.title,
			rightAnswer: currentQuiz.rightAnswer,
			answers: answers._id,
		})
		quizesIds.push(quiz._id)
	}
	const qzs = await Quizes.create({
		_id: new mongoose.Types.ObjectId(),
		quizes: [...quizesIds],
	})
	res.send(qzs)
})

router.delete("/:id", tokenMiddleware, async (req, res) => {
	const id = req.params.id
	const quizes = await Quizes.findById(id)
	for (let quizId of quizes!.quizes) {
		try {
			const quiz = await Quiz.findById(quizId)
			await AnswerList.findByIdAndRemove(quiz!.answers)
			await Quiz.findByIdAndRemove(quiz!._id)
		} catch (e) {
			console.log(e)
			res.status(404).json({
				message: "quiz not found",
			})
		}
	}
	await Quizes.findByIdAndRemove(id)
	// res.redirect("/")
	res.status(200).json({
		message: "quiz was removed",
	})
})

module.exports = router
