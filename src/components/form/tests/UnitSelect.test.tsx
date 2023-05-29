import { screen, fireEvent } from '@testing-library/react'
import UnitSelect from '../UnitSelect'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from 'src/test-utils'

const mockSetUnit = jest.fn()

describe('UnitSelect', () => {
	it('renders correctly', () => {
		renderWithTheme(<UnitSelect setUnit={mockSetUnit} />)

		expect(screen.getByTestId('unit-select-icon')).toBeInTheDocument()

		expect(screen.getByText('g')).toBeInTheDocument()
	})

	it('changes unit on button click', () => {
		renderWithTheme(<UnitSelect setUnit={mockSetUnit} />)

		const svg = screen.getByTestId('unit-select-icon')

		expect(mockSetUnit).toHaveBeenCalledWith('g')

		fireEvent.click(svg)

		expect(mockSetUnit).toHaveBeenCalledWith('ml')

		fireEvent.click(svg)

		expect(mockSetUnit).toHaveBeenCalledWith('x')
	})
})
