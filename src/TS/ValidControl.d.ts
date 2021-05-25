import { IControl, IValidation } from "@ts"

export interface IValidControl extends IControl, IValidation {
	label: string
	errorMessage: string
	value: string
	isValid: boolean
	touched: boolean
	validation: IValidation
}
