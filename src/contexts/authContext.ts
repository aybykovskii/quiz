import axios from "axios"
import React from "react"

// export const Auth = () => {
// 	const [token, setToken] = React.useState<string>("")

// 	function signIn(token: string): void{
// 		if (token) {
// 			setToken(token)
// 		}
// 	}

// 	return {
// 		token,
// 		signIn,
// 	}
// }
// const AuthDefault: ReturnType<typeof Auth>  = {
//   token: "",
//   signIn: (token: string) => void
// }
// export const AuthContext = React.createContext(Auth)
export const AuthContext = React.createContext("")
