import axios from "axios"
import React from "react"
import { noopPromise } from "@utils"
const Auth = () => {
	//FIXME: isAuth don't update state
	const [email, setEmail] = React.useState<string>("")
	const [isAuth, _setIsAuth] = React.useState<boolean>()
	const [token, setToken] = React.useState<string>("")

	React.useEffect(() => {
		const token = getTokenFromLS()
		if (typeof token == "string") {
			setTokenToLS(token)
			setIsAuth(true)
		}
	}, [])

	const setTokenToLS = (token: string): void => {
		console.log(isAuth, token)
		localStorage.setItem("LOCAL_STORAGE_TOKEN", token)
	}

	const getTokenFromLS = (): string | Error => {
		console.log("token exist")
		const token = localStorage.getItem("LOCAL_STORAGE_TOKEN")
		if (token) {
			return token
		} else {
			// setIsAuth(false)
			return new Error("token undefined")
		}
	}

	const setIsAuth = (bool: boolean) => {
		_setIsAuth(prev => bool)
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
		email,
		setIsAuth,
		setEmail,
		getTokenFromLS,
		setTokenToLS,
		useAxiosGetWithToken,
	}
}
// const AuthDefault: ReturnType<typeof Auth> = {
// 	token: "",
// 	isAuth: false,
// 	email: "",
// 	setIsAuth: false,
// 	setEmail: noopPromise as any,
// 	getTokenFromLS: noopPromise as any,
// 	setTokenToLS: noopPromise as any,
// 	useAxiosGetWithToken: noopPromise as any,
// }
export const AuthContext = React.createContext(Auth)
export const AuthContextProvider = (props: { children: React.ReactNode }) => {
	return <AuthContext.Provider value={Auth}>{props.children}</AuthContext.Provider>
}
