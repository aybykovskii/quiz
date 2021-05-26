import { IControl, IValidation } from "src/ts"

export const createControl = (config: IControl, validation: IValidation) => {
	return {
		...config,
		validation,
		isValid: !validation,
		value: "",
		touched: false,
	}
}

export function validate(value: string, validation: IValidation | null) {
	if (!validation) {
		return true
	}

	let isValid = true

	if (validation.required) {
		isValid = value.trim() !== "" && isValid
	}

	if (validation.minLength) {
		isValid = value.trim().length >= validation.minLength && isValid
	}

	return isValid
}

export function validateForm(formControls: any) {
	let isValid: boolean = true

	for (let control in formControls) {
		if (formControls.hasOwnProperty(control)) {
			isValid = formControls[control].isValid && isValid
		}
	}
	return isValid
}
