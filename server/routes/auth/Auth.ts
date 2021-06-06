import { Router } from "express"
import { signUp } from "./SignUp"
import { signIn } from "./SignIn"
import { signOut } from "./SignOut"
const auth = Router()

auth.post("/register", signUp)
auth.post("/login", signIn)
auth.post("/logout", signOut)

export default auth
