import { createControl } from "./formFramework"

export const createAuthFormControls = () => {
	return {
		email: createControl(
			{
				label: "Электронная почта",
				errorMessage: "Введите корректное значение",
			},
			{ required: true }
		),
		password: createControl(
			{ label: "Пароль", errorMessage: "Введите корректное значение" },
			{ required: true, minLength: 6 }
		),
	}
}
