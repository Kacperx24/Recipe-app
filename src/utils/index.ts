import { KeyboardEvent } from 'react'

export const handleEnterClick = (
	e: KeyboardEvent<HTMLFormElement | HTMLInputElement>,
	func?: () => void
) => {
	if (e.key === 'Enter') {
		e.preventDefault()
		if (func) func()
	}
}
