import { screen, fireEvent } from '@testing-library/react'
import Steps from '../Steps'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from 'src/test-utils'

const mockRegister = jest.fn()
const mockSetValue = jest.fn()

describe('Steps', () => {
	it('renders correctly', () => {
		renderWithTheme(
			<Steps register={mockRegister} setValue={mockSetValue} errors={{}} />
		)

		expect(screen.getByText('Add steps')).toBeInTheDocument()
		expect(screen.getByRole('textbox')).toBeInTheDocument()
	})

	it('handles add step', () => {
		renderWithTheme(
			<Steps register={mockRegister} setValue={mockSetValue} errors={{}} />
		)

		expect(screen.queryByRole('list')).not.toBeInTheDocument()

		fireEvent.change(screen.getByRole('textbox'), {
			target: { value: 'Test step' },
		})
		fireEvent.click(screen.getByText('Add'))

		expect(screen.getByRole('textbox')).toHaveValue('')

		expect(screen.getByText('Test step')).toBeInTheDocument()
	})
})
