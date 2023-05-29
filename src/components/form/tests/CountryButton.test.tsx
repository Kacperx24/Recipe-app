import CountryButton from '../CountryButton'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const mockCountry = {
	value: 'pl',
	label: 'Poland',
	image: 'poland.png',
}

const mockOnClick = jest.fn()

describe('CountryButton', () => {
	it('renders correctly', () => {
		render(
			<CountryButton
				country={mockCountry}
				onClick={mockOnClick}
				active={false}
			/>
		)

		expect(screen.getByAltText('Poland')).toBeInTheDocument()
		expect(screen.getByAltText('Poland')).toHaveAttribute('src', 'poland.png')
	})

	it('handles click event', () => {
		render(
			<CountryButton
				country={mockCountry}
				onClick={mockOnClick}
				active={false}
			/>
		)

		fireEvent.click(screen.getByAltText('Poland'))

		expect(mockOnClick).toBeCalledWith(mockCountry)
	})
})
