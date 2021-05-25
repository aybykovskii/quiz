import mongoose from "mongoose"
import { IUser } from "../../../src/ts/server/User"

const UserSchema = new mongoose.Schema({
	email: { type: String, unique: true, require: true },
	password: { type: String, require: true },
	created_at: { type: Number, require: true },
})
export interface UserDocument extends mongoose.Document, IUser {}
export const User = mongoose.model<UserDocument>("User", UserSchema)
