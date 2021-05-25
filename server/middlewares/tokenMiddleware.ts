import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { secret } from "../../src/utils"
module.exports = function (req: Request, res: Response, next: NextFunction) {
	const bearerToken = req.headers.authorization
	try {
		if (!bearerToken) {
			return res.send({
				error: "token is undefind",
			})
		} else {
			const token = bearerToken.split(" ")[1]
			const reqUser = jwt.verify(token, secret)
			return next()
		}
	} catch (e) {
		return res.send({
			error: "invalid token",
		})
	}
}
