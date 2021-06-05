import axios from "axios"
import React from "react"
import { config } from "dotenv"
import { noopPromise } from "@utils"
const Auth = () => {
	const [token, setToken] = React.useState<string>("")

	const checkAndSetToken = (token: string) => {
		setToken(token)
		localStorage.setItem("LOCAL_TOKEN", token)
		console.log(token)
	}

	const useAxiosGetWithToken = async (token: string, url: string) => {
		return await axios.get(url, {
			headers: [
				{
					Authorization: token,
				},
			],
		})
	}
	return {
		token,
		checkAndSetToken,
		useAxiosGetWithToken,
	}
}
const AuthDefault: ReturnType<typeof Auth> = {
	token: "",
	checkAndSetToken: noopPromise as any,
	useAxiosGetWithToken: noopPromise as any,
}
export const AuthContext = React.createContext(AuthDefault)
export const AuthContextProvider = (props: { children: React.ReactNode }) => {
	return <AuthContext.Provider value={Auth()}>{props.children}</AuthContext.Provider>
}
