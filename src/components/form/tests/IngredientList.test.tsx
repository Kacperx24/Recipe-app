import { fireEvent, screen, waitFor } from '@testing-library/react'
import IngredientList from '../IngredientList'
import { renderWithTheme } from 'src/test-utils'
import '@testing-library/jest-dom/extend-expect'

const mockOnRemoveIngredient = jest.fn()

const mockIngredients = [
	{ name: 'Ingredient 1', unit: 'g', quantity: '100', id: '1' },
	{ name: 'Ingredient 2', unit: 'ml', quantity: '200', id: '2' },
]

describe('IngredientList', () => {
	it('renders correctly', () => {
		renderWithTheme(
			<IngredientList
				ingredients={mockIngredients}
				onRemoveIngredient={mockOnRemoveIngredient}
			/>
		)

		mockIngredients.forEach(ingredient => {
			expect(
				screen.getByText(`${ingredient.unit} of ${ingredient.name}`)
			).toBeInTheDocument()
		})
	})

	it('handles remove ingredient', () => {
		renderWithTheme(
			<IngredientList
				ingredients={mockIngredients}
				onRemoveIngredient={mockOnRemoveIngredient}
			/>
		)

		const removeButtons = screen.getAllByRole('button')

		removeButtons.forEach(async (button, i) => {
			fireEvent.click(button)
			await waitFor(() => {
				expect(mockOnRemoveIngredient).toHaveBeenCalledWith(
					mockIngredients[i].id
				)
			})
		})
	})
})
