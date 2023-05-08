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

export const getBackgroundColor = (type: 'success' | 'error' | 'info') => {
	switch (type) {
		case 'success':
			return 'successBg'
		case 'error':
			return 'errorBg'
		case 'info':
			return 'infoBg'
		default:
			return 'successBg'
	}
}
