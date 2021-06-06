import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { config } from "dotenv"
config()
export const tokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const bearerToken = req.headers.authorization
	try {
		if (!bearerToken) {
			return res.send({
				error: "token is undefined",
			})
		} else {
			const token = bearerToken.split(" ")[1]
			const reqUser = jwt.verify(token, process.env.SECRET_KEY!)
			return next()
		}
	} catch (e) {
		return res.send({
			error: "invalid token",
		})
	}
}
