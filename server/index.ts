import express from "express"
import { config } from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import quiz from "./routes/Quiz"
import auth from "./routes/auth/Auth"
config()

const app = express()

const mongoURL = process.env.MONGO_URL || ""
const PORT = process.env.SERVER_PORT || 3000

app.use(
	cors({
		origin: [`http://localhost:${process.env.PUBLIC_PORT}`],
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

app.use(express.json())

app.use("/api/quizes", quiz)
app.use("/api/auth", auth)

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`)
})

// body parser
// app.use(bodyParser.json())
// app.use(
// 	bodyParser.urlencoded({
// 		extended: false,
// 	})
// )
