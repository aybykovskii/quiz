import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
const quiz = require("./routes/Quiz.ts")
const auth = require("./routes/auth/Auth")
const app = express()

const mongoURL =
	"mongodb+srv://admin:admin@cluster0.v5yom.mongodb.net/quiz?retryWrites=true&w=majority"
const PORT = 3000

app.use(
	cors({
		origin: ["http://localhost: 4000"],
		optionsSuccessStatus: 200,
	})
)
mongoose.connect(mongoURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
})
mongoose.connection
	.once("open", () => {
		console.log("connected to mongo instance")
	})
	.on("error", error => {
		throw new Error("error connecting to mongodb: " + error)
	})

//body parser
app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
)

app.use("/api/quizes", quiz)
app.use("/api/auth", auth)

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`)
})
