import { renderWithTheme } from 'src/test-utils'
import Ingredients from '../Ingredients'
import { screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

const mockSetValue = jest.fn()
const mockRegister = jest.fn()
describe('Ingredients', () => {
	it('renders correctly', () => {
		renderWithTheme(
			<Ingredients
				register={mockRegister}
				setValue={mockSetValue}
				errors={{}}
			/>
		)

		expect(screen.getByText('Add ingredients')).toBeInTheDocument()
	})

	it('shows error message if there are errors and no ingredients', async () => {
		const errors = { ingredients: { message: 'Ingredients are required' } }

		renderWithTheme(
			<Ingredients
				register={mockRegister}
				setValue={mockSetValue}
				errors={errors}
			/>
		)

		await waitFor(() => {
			expect(screen.getByText('Ingredients are required')).toBeInTheDocument()
		})
	})
})
