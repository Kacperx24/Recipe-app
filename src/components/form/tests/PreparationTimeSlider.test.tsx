import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'src/test-utils'
import PreparationTimeSlider from '../PreparationTimeSlider'
import '@testing-library/jest-dom/extend-expect'

describe('PreparationTimeSlider', () => {
	const mockRegister = jest.fn()
	const mockWatch = jest.fn()

	it('renders correctly', () => {
		renderWithTheme(
			<PreparationTimeSlider
				register={mockRegister}
				validation={{}}
				watch={mockWatch}
			/>
		)
		expect(screen.getByText(/Preparation Time/i)).toBeInTheDocument()
	})

	it('displays the preparation time value', () => {
		const mockWatch = jest.fn().mockReturnValue(10)
		renderWithTheme(
			<PreparationTimeSlider
				register={mockRegister}
				validation={{}}
				watch={mockWatch}
			/>
		)
		expect(screen.getByText('10')).toBeInTheDocument()
	})

	it('changes the value when the range input is changed', () => {
		const mockWatch = jest.fn().mockReturnValue(10)
		renderWithTheme(
			<PreparationTimeSlider
				register={mockRegister}
				validation={{}}
				watch={mockWatch}
			/>
		)
		const rangeInput = screen.getByRole('slider')
		fireEvent.change(rangeInput, { target: { value: 15 } })
		expect(mockRegister).toBeCalled()
	})
})
