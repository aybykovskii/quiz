import { Request, Response } from "express"
import { User } from "../../models"
import { TSignUpInput } from "../../../src/ts/server"
import md5 from "md5"
import jwt from "jsonwebtoken"
import { config } from "dotenv"
config()

export const signIn = async (req: Request, res: Response) => {
	const { email, password }: TSignUpInput = req.body
	const user = await User.findOne({ email: email })
	if (!user) {
		res.json({
			error: "user undefined",
		})
	} else if (user.password !== md5(password)) {
		res.json({
			error: "invalid password",
		})
	} else {
		const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY!, { expiresIn: "24h" })
		res.status(200).json({
			email: email,
			token: `Bearer ${token}`,
		})
	}
}
