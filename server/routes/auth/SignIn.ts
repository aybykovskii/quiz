import { Request, Response } from "express"
import { User } from "../../models"
import { TSingUpInput } from "../../../src/ts/server"
import md5 from "md5"
import jwt from "jsonwebtoken"
import { secret } from "../../../src/utils/config"

module.exports = async (req: Request, res: Response) => {
	const { email, password }: TSingUpInput = req.body
	const user = await User.findOne({ email: email })
	if (!user) {
		res.send({
			error: "user undefind",
		})
	} else if (user.password !== md5(password)) {
		res.send({
			error: "invalid password",
		})
	} else {
		const token = jwt.sign({ id: user._id }, secret, { expiresIn: "24h" })
		res
			.status(200)
			.json({
				email: email,
				token: `Bearer ${token}`,
			})
			.redirect("/quiz_list")
	}
}
