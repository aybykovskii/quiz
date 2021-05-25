import { Response, Request } from "express"
import { User } from "../../models"
import { TSingUpInput } from "../../../src/ts/server"
import { validateEmail } from "../../../src/utils"
import md5 from "md5"

module.exports = async (req: Request, res: Response) => {
	const { email, password }: TSingUpInput = req.body
	if (!email || !password || !validateEmail(email)) {
		res.json({
			error: "invalid params",
		})
	} else {
		const user = await User.findOne({ email: email })
		if (!user) {
			const candidate = await User.create({
				email,
				password: md5(password),
				created_at: Date.now(),
			})
			res.send(candidate)
		} else {
			res.send({
				error: "user already exists",
			})
		}
	}
}
