import axios from "axios"
import React from "react"
import { noopPromise } from "@utils"
const Auth = () => {
	const [email, setEmail] = React.useState<string>("")
	const [isAuth, setIsAuth] = React.useState<boolean>(false)
	const [token, setToken] = React.useState<string>("")

	const setTokenToLS = (token: string) => {
		localStorage.setItem("LOCAL_STORAGE_TOKEN", token), setIsAuth(true)
	}

	const getTokenFromLS = () => {
		console.log("token exist")
		if (localStorage.getItem("LOCAL_STORAGE_TOKEN")) {
			setIsAuth(true)
			return localStorage.getItem("LOCAL_STORAGE_TOKEN")
		} else {
			setIsAuth(false)
			return new Error("token undefined")
		}
	}

	const useAxiosGetWithToken = async (url: string) => {
		return await axios.get(url, {
			headers: [
				{
					Authorization: getTokenFromLS(),
				},
			],
		})
	}
	return {
		token,
		isAuth,
		setIsAuth,
		email,
		setEmail,
		getTokenFromLS,
		setTokenToLS,
		useAxiosGetWithToken,
	}
}
const AuthDefault: ReturnType<typeof Auth> = {
	token: "",
	isAuth: false,
	email: "",
	setIsAuth: noopPromise as any,
	setEmail: noopPromise as any,
	getTokenFromLS: noopPromise as any,
	setTokenToLS: noopPromise as any,
	useAxiosGetWithToken: noopPromise as any,
}
export const AuthContext = React.createContext(AuthDefault)
export const AuthContextProvider = (props: { children: React.ReactNode }) => {
	return <AuthContext.Provider value={Auth()}>{props.children}</AuthContext.Provider>
}
