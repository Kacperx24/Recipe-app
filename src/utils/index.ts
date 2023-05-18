import { KeyboardEvent } from 'react'

import countries from 'src/data/countries'

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

export const getColorByDifficulty = (type: string | undefined) => {
	switch (type) {
		case 'easy':
			return '#94C40B'
		case 'medium':
			return '#F0A242'
		case 'hard':
			return '#f85e5e'
		default:
			return '#ffffff'
	}
}

export const capitalizeFirstLetter = (value: string | undefined) =>
	value ? value.charAt(0).toUpperCase() + value.slice(1) : ''

export const findCountryImage = (value: string) => {
	return countries.find(country => country.value === value)?.image
}
