export { createControl, validate, validateForm } from "./formFramework"
export { validateEmail } from "./validateEmail"
export { secret } from "./config"
export { createOptionControl, createFormControls } from "./optionControls"
export { createAuthFormControls } from "./authFormControl"
export const noopPromise = () => {
	return new Promise(() => 0)
}
